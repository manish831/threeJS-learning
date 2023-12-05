import "./style.css";
import * as THREE from "three";
console.log("hello11");
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group();
scene.add(group);
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

group.add(cube2);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// position
mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = -1;
// alternate method to write same in single line.
mesh.position.set(0.7, -0.6, -1);
scene.add(mesh);

// scale
/*
mesh.scale.y = 1;
mesh.scale.z = 1;
mesh.scale.x = 3;
*/
mesh.scale.set(2, 0.5, 0.5);

// Rotation
/*
mesh.rotation.y = 3;
mesh.rotation.z =4;
mesh.rotation.x = 3;
*/
mesh.rotation.reorder("YXZ");
mesh.rotation.set(3, 1, Math.PI / 2);

/**
 * Playing or hands-on with euler-axis is problematic
 * so it's solution is Quaternion.
 */

// Axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 1;
camera.position.x = 1;
scene.add(camera);

/**
 * Renderer
 *
 */
// .position is vecctor3
// mesh.position.normalize();

console.log(mesh.position.distanceTo(camera.position));

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
