import * as THREE from 'three';

const scene = new THREE.Scene();

const box = new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshNormalMaterial( { color: 0xff0000 } ));
box.rotation.x = 60;
box.rotation.y = 45;
box.rotation.z = 30;

scene.add(box);

const camera = new THREE.PerspectiveCamera(75, ,window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 100);
camera.lookAt(box.position);

// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
document.getElementById("myCanvas").appendChild(renderer.domElement);

renderer.render(scene, camera);
