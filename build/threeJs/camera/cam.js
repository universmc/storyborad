const controls = new OrbitControls(camera, renderer.domElement);

// Animation
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}