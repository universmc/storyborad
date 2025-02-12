import Lumiere from './Lumier.js';

// Création d'une lumière ambiante
const ambientLight = new Lumiere('ambient', 0x404040, 0.5);
scene.add(ambientLight.light);

// Création d'une lumière directionnelle
const directionalLight = new Lumiere('directional', 0xffffff, 0.8);
directionalLight.light.position.set(3, 3, 3);
scene.add(directionalLight.light);