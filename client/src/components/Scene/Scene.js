import React, { useEffect, useRef, useState } from 'react';
import './Scene.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const textureLoader = new THREE.TextureLoader();
const raycaster = new THREE.Raycaster();

const Scene = ({ design, texture, initialLoaded, camera, setCamera }) => {
  const threeCanvasRef = useRef(null);
  const [renderer, setRenderer] = useState(null);
  const [newMaterial, setNewMaterial] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const setupRaycansting = (model) => {
    // .addEventListener('mousedown', (event) => {
    //   console.log('hi');
    // });

    textureLoader.load('/api/assets/images/colorUVsmall.png', (texture) => {
      const mouse = new THREE.Vector2();
      const img = texture.image;

      // make canvas for later pixel value query

      const textureCanvas = document.createElement('canvas');
      textureCanvas.width = img.width;
      textureCanvas.height = img.height;
      textureCanvas
        .getContext('2d')
        .drawImage(img, 0, 0, img.width, img.height);

      // add global listener for click event, will check intersection here

      renderer.domElement.addEventListener('click', (event) => {
        // check intersections with imported model
        const box = renderer.domElement.getBoundingClientRect();

        mouse.x = (event.clientX / box.width) * 2 - 1;
        mouse.y = -(event.clientY / box.height) * 2 + 1;

        // console.log(mouse.x, mouse.y);

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(model, true);

        // if there is any intersection, continue

        if (intersects.length) {
          // get pixel coordinates on texture
          // console.log(intersects);

          const uv = intersects[0].uv2;
          uv.x *= img.width;
          uv.y *= img.height;

          // get pixel value

          const colorValues = textureCanvas
            .getContext('2d')
            .getImageData(uv.x, uv.y, 1, 1).data;

          // console.log(colorValues[0]);
          switch (colorValues[0]) {
            case 255:
              console.log('Inner Heal');
              break;

            case 220:
              console.log('Inner Quarter');
              break;

            case 210:
              console.log('Inner Swoosh');
              break;

            case 200:
              console.log('OuterHeel');
              break;

            case 190:
              console.log('Outer Quarter');
              break;

            case 180:
              console.log('Outer swoosh');
              break;

            case 170:
              console.log('heel tab');
              break;

            case 160:
              console.log('heel wing');
              break;

            case 150:
              console.log('tongue');
              break;

            case 140:
              console.log('toe box');
              break;

            case 130:
              console.log('lace lock');
              break;

            case 120:
              console.log('lace');
              break;

            case 110:
              console.log('lace cage');
              break;

            case 100:
              console.log('sole');
              break;

            case 90:
              console.log('toe cap');
              break;

            case 80:
              console.log('inner sole');
              break;

            case 70:
              console.log('outer Sole');
              break;

            case 60:
              console.log('sock liner');
              break;
            default:
              console.log('selection failed');
              break;
          }
        }
      });
    });
  };

  const createMaterial = (texture) => {
    return new Promise((resolve) => {
      const aoimg = new Image();
      aoimg.src = '/api/assets/images/ao_map.png';

      aoimg.onload = () => {
        const ao = new THREE.CanvasTexture(aoimg);
        ao.flipY = false;
        resolve(
          new THREE.MeshStandardMaterial({
            map: texture,
            aoMap: ao,
          })
        );
      };
    });
  };

  // Initialize Renderer and newMaterial
  useEffect(() => {
    setRenderer(
      new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
        alpha: true,
      })
    );
    async function createMat() {
      const mat = await createMaterial(texture);
      setNewMaterial(mat);
    }
    createMat();
  }, [texture]);

  useEffect(() => {
    //===================================================== camera
    if (renderer && newMaterial) {
      renderer.setSize(2048, 2048);
      threeCanvasRef.current.appendChild(renderer.domElement);
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
      camera.position.z = 7.5;
      camera.position.y = 0;
      setCamera(camera);
    }
  }, [renderer, newMaterial, setCamera]);

  // Build threeJS Scene
  useEffect(() => {
    if (renderer && newMaterial && camera) {
      //===================================================== scene
      const scene = new THREE.Scene();

      //===================================================== lights
      const light = new THREE.AmbientLight(0xffffff, 1);
      scene.add(light);

      //===================================================== orbit controls
      const controls = new OrbitControls(camera, document.body);
      controls.maxDistance = 10;
      controls.minDistance = 4;
      controls.minPolarAngle = Math.PI * (1 / 5);
      controls.maxPolarAngle = Math.PI * (6 / 7);
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.18;
      controls.update();

      //===================================================== loading mananger
      const manager = new THREE.LoadingManager();
      manager.onLoad = () => {
        setIsLoading(false);
      };

      //===================================================== model
      const loader = new GLTFLoader(manager);
      loader.load(`/api/assets/models/${design.configData.source}`, (gltf) => {
        gltf.scene.traverse((node) => {
          if (node.isMesh) node.material = newMaterial;
        });
        const model = gltf.scene;
        model.scale.set(0.35, 0.35, 0.35);
        model.position.y = -1;
        model.rotation.y = -95 * (Math.PI / 180);
        scene.add(model);
        setupRaycansting(model);
      });

      //===================================================== animate
      const render = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
        controls.update();
      };

      render();

      //===================================================== cleanup
      const cleanup = () => {
        cancelAnimationFrame(render);
        controls.dispose();
      };

      return cleanup;
    }
  }, [
    newMaterial,
    renderer,
    camera,
    design.configData.source,
    setupRaycansting,
  ]);

  return (
    <div
      className='scene-container'
      id='scene-container-id'
      ref={threeCanvasRef}
    >
      {!isLoading && initialLoaded ? null : <LoadingSpinner />}
    </div>
  );
};

export default Scene;
