#!/bin/bash

# Entramos en el folder app
echo "Entrando en el directorio /opt/app/NNotes ..."
cd /opt/app/NNotes

# Instala las dependencias del proyecto
echo "Instalando las dependencias del proyecto ..."
npm install

# Ejecuta el comando npm run build
echo "Ejecutando el comando npm run build ..."
npm run build

# Ejecuta el comando npm start con el puerto 3001
echo "Iniciando la aplicación con el comando npm start en el puerto 300X ..."
npm start