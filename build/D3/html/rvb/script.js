// Récupérer les cercles
const redCircle = document.getElementById('red');
const greenCircle = document.getElementById('green');
const blueCircle = document.getElementById('blue');

// Fonction pour mélanger les couleurs
function mixColors(r, g, b, alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Exemple d'utilisation : créer un gradient linéaire
const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
gradient.id = "myGradient";
gradient.setAttribute("x1", "0%");
gradient.setAttribute("x2", "100%");

const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop1.setAttribute("offset", "0%");
stop1.setAttribute("stop-color", mixColors(255, 0, 0, 1));

const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop2.setAttribute("offset", "100%");
stop2.setAttribute("stop-color", mixColors(0, 255, 0, 1));

gradient.appendChild(stop1);
gradient.appendChild(stop2);

// Appliquer le gradient à un cercle
redCircle.style.fill = `url(#myGradient)`;