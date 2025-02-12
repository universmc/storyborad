#!/bin/bash

# Nom du projet par défaut
project_name="Project"

# Vérifier si un nom de projet est passé en argument
if [ "$#" -eq 1 ]; then
  project_name="$1"
fi

# Créer les répertoires
mkdir -p .setup build data src/{css,js,svg} srv/{json}

# Créer les fichiers
touch index.html src/svg/plan.svg src/css/styles.css src/js/scripts.js srv/serveur.json

# Initialiser un projet npm
npm init -y

# Créer un fichier .gitignore
cat > .gitignore << EOF
node_modules
build
.vscode
EOF

echo "Projet $project_name créé avec succès !"