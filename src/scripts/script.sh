#!/bin/bash

# Entramos en el folder app
cd /opt/app/NNotes

# Instala las dependencias del proyecto with sudo
sudo npm install

# Ejecuta el comando npm run build
sudo npm run build

sudo chmod -R 755 /opt/app/NNotes/.next

# Ejecuta el comando npm start con el puerto 3001
npm start