#!/bin/bash

# Entramos en el folder app
cd /opt/app/NNotes

if [ -d "/opt/app/NNotes/.next" ]; then
  # Change permissions on .next directory if it exists
  sudo chmod +x "/opt/app/NNotes/.next"
fi

# Instala las dependencias del proyecto with sudo
sudo npm install

# Ejecuta el comando npm run build
npm run build

# Ejecuta el comando npm start con el puerto 3001
npm start