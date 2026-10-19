@echo off
title Maths CRPE - serveur local
cd /d "%~dp0"
set PORT=5174

where python >nul 2>nul && (set PY=python) || (set PY=py)

echo.
echo   Mise a jour des pages (python build.py)...
%PY% build.py
echo.
echo   Maths CRPE : http://localhost:%PORT%
echo   Ferme cette fenetre (ou Ctrl+C) pour arreter le serveur.
echo.
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:%PORT%"
%PY% -m http.server %PORT% --bind 127.0.0.1
pause
