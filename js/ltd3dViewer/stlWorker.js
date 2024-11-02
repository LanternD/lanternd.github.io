importScripts("three.min.js");
importScripts("STLLoader.js");
// self.importScripts('https://threejs.org/build/three.js', 'https://threejs.org/examples/js/loaders/STLLoader.js');

self.onmessage = function (event) {
    const { canvas, stlUrl, width, height } = event.data;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const loader = new THREE.STLLoader();
    loader.load(stlUrl, function (geometry) {
        const material = new THREE.MeshStandardMaterial({ color: 0xFF5533 });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        render();
    });

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    function render() {
        renderer.render(scene, camera);
        canvas.convertToBlob().then(blob => {
            createImageBitmap(blob).then(imageBitmap => {
                self.postMessage(imageBitmap, [imageBitmap]);
                requestAnimationFrame(render);
            });
        });
    }
};
