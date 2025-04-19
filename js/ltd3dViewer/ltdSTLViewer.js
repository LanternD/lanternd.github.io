function STLViewer(model, elementID) {
    var elem = $("#" + elementID)[0];

    var width = elem.clientWidth;
    var height = elem.clientHeight;
    var aspect = width / height;
    var frustumSize = 500;
    var camera = new THREE.OrthographicCamera(
        frustumSize * aspect / -2, frustumSize * aspect / 2,
        frustumSize / 2, frustumSize / -2, 1, 1000
    );

    var renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(width, height);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    $(elem).append(renderer.domElement);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.rotateSpeed = 0.05;
    controls.dampingFactor = 0.1;
    controls.enableZoom = true;
    controls.minDistance = 20;
    controls.maxDistance = 90;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.75;

    var scene = new THREE.Scene();
    scene.add(new THREE.HemisphereLight(0xffffff, 1.5));

    var loader = new THREE.STLLoader();
    loader.load(model, function(geometry) {
        var material = new THREE.MeshPhongMaterial({
            color: 0x737ccc,
            specular: 100, // 设置specular为100
            shininess: 80 // 设置shininess为80
        });
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // 计算包围盒和中心
        geometry.computeBoundingBox();
        var bbox = geometry.boundingBox;
        var center = new THREE.Vector3();
        bbox.getCenter(center);

        // 移动模型到中心位置
        mesh.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(-center.x, -center.y, -center.z));

        // 计算模型的最大尺寸
        var modelWidth = bbox.max.x - bbox.min.x;
        var modelHeight = bbox.max.y - bbox.min.y;
        var modelDepth = bbox.max.z - bbox.min.z;

        // 假设单位是毫米，将其转换为米
        var widthInMeters = modelWidth / 1000;
        var heightInMeters = modelHeight / 1000;
        var depthInMeters = modelDepth / 1000;

        console.log("Model dimensions in meters: ", widthInMeters, heightInMeters, depthInMeters);

        // 调整正交相机的视锥大小，使模型完整显示
        frustumSize = Math.max(modelWidth, modelHeight, modelDepth) * 1.5;
        camera.left = -frustumSize * aspect / 2;
        camera.right = frustumSize * aspect / 2;
        camera.top = frustumSize / 2;
        camera.bottom = -frustumSize / 2;

        // 设置相机位置为三轴等距视角
        var offset = Math.sqrt(3) * frustumSize / 3;
        camera.position.set(center.x + offset, center.y + offset, center.z + offset);
        camera.lookAt(center);
        camera.updateProjectionMatrix();

        // 更新渲染器和相机的尺寸
        updateRendererSize();

        controls.update();

        controls.addEventListener('change', render);

        render();

        if (isSafari()) {
            animate();
        }
    });

    function render() {
        renderer.render(scene, camera);
    }

    function animate() {
        setTimeout(function() { // 限制为 30 FPS
            requestAnimationFrame(animate);
            controls.update();
            render();
        }, 1000 / 30);
    }

    function isSafari() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1;
    }

    function updateRendererSize() {
        var divWidth = $(elem).width();
        var divHeight = Math.max(Math.min(divWidth / aspect, 500), 200); // 限制高度在200px到500px之间

        $(elem).css({
            width: divWidth + 'px',
            height: divHeight + 'px'
        });

        renderer.setSize(divWidth, divHeight);
        camera.left = -frustumSize * divWidth / divHeight / 2;
        camera.right = frustumSize * divWidth / divHeight / 2;
        camera.top = frustumSize / 2;
        camera.bottom = -frustumSize / 2;
        camera.updateProjectionMatrix();
    }

    $(window).resize(function() {
        updateRendererSize();
        render();
    });
}


function initViewer(elementID, geometryData) {
    const elem = document.getElementById(elementID);
    const camera = new THREE.PerspectiveCamera(70, elem.clientWidth / elem.clientHeight, 1, 1000);

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    const resolutionFactor = 0.5; // Adjust this factor to lower the resolution (0.5 means half the resolution)
    renderer.setSize(elem.clientWidth * resolutionFactor, elem.clientHeight * resolutionFactor);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    elem.appendChild(renderer.domElement);

    window.addEventListener('resize', function() {
        renderer.setSize(elem.clientWidth * resolutionFactor, elem.clientHeight * resolutionFactor);
        camera.aspect = elem.clientWidth / elem.clientHeight;
        camera.updateProjectionMatrix();
    }, false);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.rotateSpeed = 0.05;
    controls.dampingFactor = 0.1;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.75;

    const scene = new THREE.Scene();
    scene.add(new THREE.HemisphereLight(0xffffff, 1.5));

    const loader = new THREE.ObjectLoader();
    const geometry = loader.parse(geometryData);
    const material = new THREE.MeshPhongMaterial({
        color: 0x737ccc,
        specular: 100,
        shininess: 80
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const middle = new THREE.Vector3();
    geometry.computeBoundingBox();
    geometry.boundingBox.getCenter(middle);
    mesh.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(-middle.x, -middle.y, -middle.z));

    const yOffset = 10; // Adjust this value to control the downward shift
    mesh.position.y -= yOffset;

    const largestDimension = Math.max(geometry.boundingBox.max.x, geometry.boundingBox.max.y, geometry.boundingBox.max.z);
    camera.position.z = largestDimension * 1.9;

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}

function loadSTL(model, elementID) {
    const worker = new Worker('../js/ltd3dViewer/stlWorker.js');
    worker.postMessage({
        model,
        elementID
    });

    worker.onmessage = function(event) {
        const {
            geometry,
            elementID
        } = event.data;
        const parsedGeometry = JSON.parse(geometry);
        initViewer(elementID, parsedGeometry);
    };
}
