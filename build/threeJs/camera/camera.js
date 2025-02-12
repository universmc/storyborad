import * as THREE from 'three';

class Camera {
  constructor(fov, aspect, near, far) {
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  }

  setPosition(x, y, z) {
    this.camera.position.set(x, y, z);
  }

  lookAt(target) {
    this.camera.lookAt(target);
  }

  updateProjectionMatrix() {
    this.camera.updateProjectionMatrix();
  }
}

export default Camera;