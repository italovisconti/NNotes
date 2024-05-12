#!/bin/bash

#Damos los permisos
chmod -R 777 /opt/app/NNotes/.next

# Entramos en el folder app
cd /opt/app/NNotes

# Instala las dependencias del proyecto with sudo
sudo npm install

# Ejecuta el comando npm run build
npm run build

# Ejecuta el comando npm start con el puerto 3001
npm start