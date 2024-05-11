#!/bin/bash

# Entramos en el forlder app
cd /opt/app/NNotes

# Instala las dependencias del proyecto
npm install

# Ejecuta el comando npm run build
npm run build

# Ejecuta el comando npm start con el puerto 3001
npm run start -- --port 3001