#!/bin/bash

# Nom du projet par défaut
project_name="CMS"

# Vérifier si un nom de projet est passé en argument
if [ "$#" -eq 1 ]; then
  project_name="$1"
fi

# Créer les répertoires
if ! mkdir -p .setup build data src/{html,css,json,js,svg,scss,ascci,composants,pages,images,fonts} srv/{json} ; then
  echo "Erreur lors de la création des répertoires."
  exit 1
fi

# Créer les fichiers
if ! touch src/html/index.html src/svg/icon.svg src/css/styles.css src/js/scripts.js srv/server.json ; then
  echo "Erreur lors de la création des fichiers."
  exit 1
fi

# Initialiser un projet npm
npm init -y


# Créer un fichier .gitignore
cat > .gitignore << EOF
node_modules
build
.vscode
EOF

echo "Projet $project_name créé avec succès !"

# Proposition de choix du framework/CMS
read -p "Voulez-vous utiliser un framework/CMS ? (oui/non) " choice

if [[ "$choice" == "oui" ]]; then
  read -p "Quel framework/CMS souhaitez-vous utiliser ? (ex: React, Angular, Vue.js) " framework
  # Installer le framework/CMS choisi
  npm install "$framework"
  echo "Framework/CMS $framework installé."
fi