import React, { useEffect, useRef, useState } from 'react';
import './Scene.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Scene = ({
  design,
  texture,
  textureClone,
  initialLoaded,
  camera,
  setCamera,
  orbitControls,
  setOrbitControls,
  setCurrentPart,
}) => {
  // console.log('scene');
  const threeCanvasRef = useRef(null);
  const [renderer, setRenderer] = useState(null);
  const [newMaterial, setNewMaterial] = useState(null);
  const [newMaterialClone, setNewMaterialClone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const createMaterial = (texture) => {
      return new Promise((resolve) => {
        const aoimg = new Image();
        aoimg.src = `/api/assets/images/${design.configData.source.aoMapRight}`;

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

    async function createMatClone() {
      const mat = await createMaterial(textureClone);
      setNewMaterialClone(mat);
    }
    createMatClone();
  }, [texture, design.configData.source.aoMapRight, textureClone]);

  useEffect(() => {
    //===================================================== camera
    if (renderer && newMaterial) {
      renderer.setSize(2048, 2048);
      threeCanvasRef.current.appendChild(renderer.domElement);
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
      camera.position.z = 8.5;
      camera.position.y = 0;
      camera.layers.enable(1);
      camera.layers.enable(2);
      setCamera(camera);
    }
  }, [renderer, newMaterial, setCamera]);

  useEffect(() => {
    //===================================================== orbit controls
    if (renderer && newMaterial && camera) {
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.maxDistance = 10;
      controls.minDistance = 4;
      controls.minPolarAngle = Math.PI * (1 / 5);
      controls.maxPolarAngle = Math.PI * (6 / 7);
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.18;
      controls.update();
      setOrbitControls(controls);
    }
  }, [renderer, newMaterial, camera, setOrbitControls]);

  // Build threeJS Scene
  useEffect(() => {
    if (
      renderer &&
      newMaterial &&
      newMaterialClone &&
      camera &&
      orbitControls
    ) {
      //===================================================== scene
      const scene = new THREE.Scene();

      //===================================================== lights
      const light = new THREE.AmbientLight(0xffffff, 1);
      scene.add(light);

      //===================================================== loading mananger
      const manager = new THREE.LoadingManager();
      manager.onLoad = () => {
        setIsLoading(false);
      };

      //===================================================== raycasting
      const textureLoader = new THREE.TextureLoader();
      const raycaster = new THREE.Raycaster();
      raycaster.layers.enable(1);
      raycaster.layers.enable(2);

      const setupRaycasting = (model, modelClone) => {
        textureLoader.load(
          `/api/assets/images/${design.configData.source.redMapRight}`,
          (texture) => {
            console.log('ray');
            const mouse = new THREE.Vector2();
            const img = texture.image;
            const textureCanvas = document.createElement('canvas');
            textureCanvas.width = img.width;
            textureCanvas.height = img.height;
            const textureCanvasCTX = textureCanvas.getContext('2d');

            function waitForElement() {
              if (
                textureCanvasCTX !== null &&
                typeof textureCanvas === 'object'
              ) {
                textureCanvasCTX.drawImage(img, 0, 0, img.width, img.height);
              } else {
                setTimeout(waitForElement, 100);
              }
            }
            waitForElement();

            let drag = false;

            renderer.domElement.addEventListener('pointerdown', (event) => {
              drag = false;
            });

            renderer.domElement.addEventListener('pointermove', (event) => {
              event.preventDefault();
              drag = true;
            });

            renderer.domElement.addEventListener('pointerup', (event) => {
              event.preventDefault();
              if (!drag) {
                // check intersections with imported model
                const box = renderer.domElement.getBoundingClientRect();

                mouse.x = (event.clientX / box.width) * 2 - 1;
                mouse.y = -(event.clientY / box.height) * 2 + 1;

                raycaster.setFromCamera(mouse, camera);

                const intersects = raycaster.intersectObjects(
                  [model, modelClone],
                  true
                );

                // if there is any intersection, continues
                if (intersects.length) {
                  // get pixel coordinates on texture
                  const uv = intersects[0].uv2;
                  uv.x *= img.width;
                  uv.y *= img.height;

                  // get pixel value
                  const colorValues = textureCanvas
                    .getContext('2d')
                    .getImageData(uv.x, uv.y, 1, 1).data;

                  switch (colorValues[0]) {
                    case 255:
                      setCurrentPart(4);
                      break;

                    case 220:
                      setCurrentPart(2);
                      break;

                    case 210:
                      setCurrentPart(0);
                      break;

                    case 200:
                      setCurrentPart(5);
                      break;

                    case 190:
                      setCurrentPart(3);
                      break;

                    case 180:
                      setCurrentPart(1);
                      break;

                    case 170:
                      setCurrentPart(16);
                      break;

                    case 160:
                      setCurrentPart(15);
                      break;

                    case 150:
                      setCurrentPart(14);
                      break;

                    case 140:
                      setCurrentPart(9);
                      break;

                    case 130:
                      setCurrentPart(13);
                      break;

                    case 120:
                      setCurrentPart(11);
                      break;

                    case 110:
                      setCurrentPart(12);
                      break;

                    case 100:
                      setCurrentPart(8);
                      break;

                    case 90:
                      setCurrentPart(10);
                      break;

                    case 80:
                      setCurrentPart(7);
                      break;

                    case 70:
                      setCurrentPart(6);
                      break;

                    case 60:
                      setCurrentPart(17);
                      break;
                    default:
                      break;
                  }
                }
              }
            });
          }
        );
      };

      //===================================================== model
      const loader = new GLTFLoader(manager);
      loader.load(
        `/api/assets/images/${design.configData.source.modelRight}`,
        (gltf) => {
          gltf.scene.traverse((node) => {
            if (node.isMesh) {
              node.material = newMaterial;
              node.material.side = THREE.DoubleSide;
              node.layers.set(1);
            }
          });
          const model = gltf.scene;

          model.scale.set(0.35, 0.35, 0.35);
          model.position.y = -1;
          model.position.z = 1.25;
          model.rotation.y = -95 * (Math.PI / 180);
          scene.add(model);

          const modelClone = gltf.scene.clone();

          modelClone.scale.set(-0.35, 0.35, 0.35);
          modelClone.position.y = -1;
          modelClone.position.z = -1.25;
          modelClone.rotation.y = -95 * (Math.PI / 180);
          scene.add(modelClone);

          modelClone.traverse((node) => {
            if (node.isMesh) {
              node.material = newMaterialClone;
              node.material.side = THREE.DoubleSide;
              node.layers.set(2);
            }
          });

          setupRaycasting(model, modelClone);
        }
      );

      //===================================================== animate
      const render = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
        orbitControls.update();
      };

      render();

      //===================================================== cleanup
      const cleanup = () => {
        cancelAnimationFrame(render);
        orbitControls.dispose();
      };

      return cleanup;
    }
  }, [
    newMaterial,
    renderer,
    camera,
    design.configData.source,
    setCurrentPart,
    newMaterialClone,
    orbitControls,
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
