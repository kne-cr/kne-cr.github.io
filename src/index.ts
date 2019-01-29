import * as THREE from 'three';

const width = 500;
const height = 500;

// scene
const scene = new THREE.Scene();

// mesh
const geometry = new THREE.SphereGeometry(5, 60, 40);
geometry.scale(-1, 1, 1);

const material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

 const sphere = new THREE.Mesh(geometry, material);
 scene.add(sphere);

 //camera
 const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
 camera.position.set(0, 0, 0.1);
 camera.lookAt(sphere.position);

 // render
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(width, height);
 renderer.setClearColor(0x000000);
 document.getElementById("myCanvas").appendChild(renderer.domElement);

 renderer.render(scene, camera);
