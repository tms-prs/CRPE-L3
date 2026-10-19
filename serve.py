#!/usr/bin/env python3
"""Petit serveur local pour le site (utilisé par lancer.bat).

Équivalent de `python -m http.server`, avec deux protections :
- écoute uniquement sur 127.0.0.1 (pas accessible depuis le réseau) ;
- ne sert jamais les fichiers sensibles (creds.txt, dossier .git, scripts Python, .gitignore).

Usage :  python serve.py [port]
"""
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, urlparse

BLOCKED_NAMES = {"creds.txt", ".gitignore", "build.py", "serve.py"}
BLOCKED_DIRS = {".git", "__pycache__"}


class Handler(SimpleHTTPRequestHandler):
    def _blocked(self):
        path = unquote(urlparse(self.path).path)
        parts = [p for p in path.split("/") if p]
        return any(p in BLOCKED_DIRS or p.lower() in BLOCKED_NAMES for p in parts)

    def do_GET(self):
        if self._blocked():
            self.send_error(404, "File not found")
            return
        super().do_GET()

    def do_HEAD(self):
        if self._blocked():
            self.send_error(404, "File not found")
            return
        super().do_HEAD()


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5174
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print("Serveur : http://localhost:%d (Ctrl+C pour arreter)" % port)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
