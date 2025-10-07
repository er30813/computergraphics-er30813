import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(     
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000 
);
camera.position.z = 10;

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cubeMesh = new THREE.Mesh(geometry, material);

const sphereGeometry = new THREE.SphereGeometry(1, 16, 16);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00, wireframe: true });
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);

const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
const coneMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);

const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);

scene.add(cubeMesh);
scene.add(sphereMesh);
scene.add(coneMesh);
scene.add(torusMesh);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 3);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

cubeMesh.position.set(-3, 0, 0);
sphereMesh.position.set(-5, 2, -3); 
coneMesh.position.set(0, -2, 0);
torusMesh.position.set(0, 3, 0);

let direction = 1;
const speed = 0.05; 
const rightLimit = 5; 
const leftLimit = -5; 

function animate() {
    requestAnimationFrame(animate);
    
    cubeMesh.rotation.x += 0.01;
    cubeMesh.rotation.y += 0.01;
    
    sphereMesh.position.x += speed * direction;
    
    if (sphereMesh.position.x >= rightLimit) direction = -1;
    if (sphereMesh.position.x <= leftLimit) direction = 1;

    coneMesh.rotation.x += 0.01;
    torusMesh.rotation.z += 0.02;
    
    renderer.render(scene, camera);
}

animate();

document.body.appendChild(renderer.domElement);
