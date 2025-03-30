const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('universe-container').appendChild(renderer.domElement);

const starsGeometry = new THREE.BufferGeometry();
const starCount = 5000;
const positions = new Float32Array(starCount * 3);

let i = 0;
while (i < starCount * 3) {
    positions[i] = (Math.random() - 0.5) * 1000;
    i++;
    positions[i] = (Math.random() - 0.5) * 1000;
    i++;
    positions[i] = (Math.random() - 0.5) * 1000;
    i++;
}

starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const starsMaterial = new THREE.PointsMaterial();
starsMaterial.color = new THREE.Color(0x555555);
starsMaterial.size = 0.7;

const starField = new THREE.Points(starsGeometry, starsMaterial);
scene.add(starField);

camera.position.z = 500;

function animate() {
    requestAnimationFrame(animate);
    starField.rotation.x += 0.0005;
    starField.rotation.y += 0.0005;
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', handleResize);

function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}