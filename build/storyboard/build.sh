#!/bin/bash

# Nom du projet par défaut
project_name="storyboard"

# Vérifier si un nom de projet est passé en argument
if [ "$#" -eq 1 ]; then
  project_name="$1"
fi

echo "📂 Création du projet : $project_name ..."

# Création des répertoires
mkdir -p $project_name/{build,config,data,src/{html,css,json,js,svg,scss,components,pages},srv}

# Création des fichiers de base
touch $project_name/src/html/index.html
touch $project_name/src/css/styles.css
touch $project_name/src/js/scripts.js
touch $project_name/src/svg/icon.svg
touch $project_name/srv/server.json
touch $project_name/README.md

# Initialisation d'un projet npm avec les dépendances nécessaires
cd $project_name
npm init -y

# Ajout des dépendances essentielles
npm install three dat.gui openai axios

# Fichier .gitignore
cat > .gitignore << EOF
node_modules
build
.vscode
.DS_Store
EOF

echo "✅ Projet $project_name créé avec succès ! 🚀"
