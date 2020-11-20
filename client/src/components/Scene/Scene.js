import React, { useEffect, useRef, useState } from 'react';
import './Scene.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Scene = ({ design, texture, initialLoaded, camera, setCamera }) => {
  const threeCanvasRef = useRef(null);
  const [renderer, setRenderer] = useState(null);
  const [newMaterial, setNewMaterial] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      // scene.background = new THREE.Color(0xf9f9f9);

      //===================================================== lights
      const light = new THREE.AmbientLight(0xffffff, 1);
      scene.add(light);

      //===================================================== orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.maxDistance = 10;
      controls.minDistance = 4;
      controls.minPolarAngle = Math.PI * (1 / 5);
      controls.maxPolarAngle = Math.PI * (6 / 7);
      controls.enablePan = false;
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
  }, [newMaterial, renderer, camera, design.configData.source]);

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
