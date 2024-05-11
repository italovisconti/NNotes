#!/bin/bash

# Entramos en el forlder app
cd /opt/app/

# Clonamos el repositorio
git clone https://github.com/italovisconti/NNotes.git /opt/app/NNotes

# Cambia al directorio del proyecto
cd /NNotes

# Instala las dependencias del proyecto
npm install

# Ejecuta el comando npm run build
npm run build

# Ejecuta el comando npm start con el puerto 3001
npm start