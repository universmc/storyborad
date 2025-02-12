import * as THREE from 'three';

class Lumiere {
  constructor(type, color, intensity) {
    switch (type) {
      case 'ambient':
        this.light = new THREE.AmbientLight(color, intensity);
        break;
      case 'directional':
        this.light = new THREE.DirectionalLight(color, intensity);
        break;
      case 'point':
        this.light = new THREE.PointLight(color, intensity);
        break;
      case 'spot':
        this.light = new THREE.SpotLight(color, intensity);
        break;
      default:
        console.error('Type de lumière non reconnu');
        return null;
    }

    return this.light;
  }
}

export default Lumiere;