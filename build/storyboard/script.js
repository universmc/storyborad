document.addEventListener('keydown', (event) => {
    if (event.key === 's') { // Appuyer sur 'S' pour capturer
        renderer.render(scene, camera);
        const screenshot = renderer.domElement.toDataURL("image/png");
        const link = document.createElement('a');
        link.href = screenshot;
        link.download = 'storyboard_scene.png';
        link.click();
        console.log("📸 Capture enregistrée !");
    }
});
