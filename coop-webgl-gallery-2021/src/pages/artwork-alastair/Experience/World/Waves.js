import { PlaneGeometry, BoxGeometry, SphereGeometry, Mesh, ShaderMaterial } from 'three/build/three.module';

import { Vector2 } from 'three/src/math/Vector2.js';
import { Color } from 'three/src/math/Color.js';

import Experience from '../Experience.js';

import beadVertexShader from './shaders/waves/vertex.glsl.js';
import beadFragmentShader from './shaders/waves/fragment.glsl.js';

export default class Beads {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.objects = [];

    this.debug.active && (this.debugFolder = this.debug.ui.addFolder('draggable waves'));

    this.setGeometry();
    this.setMaterial();
    this.setMesh();
  }

  setGeometry() {
    this.boxGeometry = new BoxGeometry(1, 1, 1, 12, 12, 12);
    this.planeGeometry = new PlaneGeometry(2, 2, 256, 256);
    this.sphereGeometry = new SphereGeometry(1, 32, 32);
  }

  setMaterial() {
    this.material = new ShaderMaterial({
      vertexShader: beadVertexShader,
      fragmentShader: beadFragmentShader,
      uniforms: {
        uTime: { value: 0 },

        uBigWavesElevation: { value: 0.1 },
        uBigWavesFrequency: { value: new Vector2(1, 1) },
        uBigWavesSpeed: { value: 0.75 },

        uSmallWavesElevation: { value: 0.15 },
        uSmallWavesFrequency: { value: 3 },
        uSmallWavesSpeed: { value: 0.2 },
        uSmallWavesIterations: { value: 4 },

        uDepthColor: { value: new Color('#C02156') },
        uSurfaceColor: { value: new Color('#35FF69') },
        uColorOffset: { value: 0.08 },
        uColorMultiplier: { value: 5 }
      }
      // wireframe: true
    });
  }

  //===== Objects =====
  createBox() {
    const mesh = new Mesh(this.boxGeometry, this.material);
    mesh.position.y = 0.6;
    mesh.castShadow = true;
    this.scene.add(mesh);
    this.objects.push(mesh);
  }

  createPlane() {
    const mesh = new Mesh(this.planeGeometry, this.material);
    mesh.rotation.x = -Math.PI * 0.5;
    mesh.position.y = 0.6;
    mesh.castShadow = true;
    this.scene.add(mesh);
    this.objects.push(mesh);
  }

  createSphere() {
    const mesh = new Mesh(this.sphereGeometry, this.material);
    mesh.position.y = 0.6;
    mesh.castShadow = true;
    this.scene.add(mesh);
    this.objects.push(mesh);
  }

  setMesh() {
    //===== DEBUG =====
    if (this.debug.active) {
      const debugObject = {
        Box: () => {
          this.createBox();
        },
        Plane: () => {
          this.createPlane();
        },
        Sphere: () => {
          this.createSphere();
        },
        Reset: () => {
          for (const object of this.objects) {
            this.scene.remove(object);
          }
          this.objects = [];
        }
      };
      this.debugFolder.add(debugObject, 'Box');
      this.debugFolder.add(debugObject, 'Plane');
      this.debugFolder.add(debugObject, 'Sphere');
      this.debugFolder.add(debugObject, 'Reset');
    }
  }

  update() {
    //===== MATERIAL MOVEMENT =====
    this.material.uniforms.uTime.value = this.time.elapsed * 0.001;
  }
}