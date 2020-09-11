import React, { useEffect, useRef, useState } from "react";
import "./Scene.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Scene = ({ design, texture }) => {
  const canvasRef = useRef(null);
  const [renderer, setRenderer] = useState(null);
  const [newMaterial, setNewMaterial] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createMaterial = (texture) => {
    const aoimg = new Image();
    aoimg.src = "assets/images/ao_diffuse.png";
    const ao = new THREE.CanvasTexture(aoimg);
    ao.flipY = false;

    return new THREE.MeshStandardMaterial({
      map: texture,
      aoMap: ao,
    });
  };

  // Initialize Renderer and newMaterial
  useEffect(() => {
    setRenderer(new THREE.WebGLRenderer({ antialias: true }));
    setNewMaterial(createMaterial(texture));
  }, [texture]);

  // Build threeJS Scene
  useEffect(() => {
    if (renderer && newMaterial) {
      canvasRef.current.appendChild(renderer.domElement);
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;

      //===================================================== scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf9f9f9);

      //===================================================== camera
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      camera.position.z = 8.5;
      camera.position.y = 0;

      //===================================================== orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.maxDistance = 12;
      controls.minDistance = 3;
      controls.minPolarAngle = Math.PI * (1 / 5);
      controls.maxPolarAngle = Math.PI * (6 / 7);
      controls.enablePan = false;
      controls.update();

      //===================================================== lights
      const light = new THREE.AmbientLight(0xffffff, 1);
      scene.add(light);

      //===================================================== loading mananger
      const manager = new THREE.LoadingManager();
      manager.onLoad = () => {
        setIsLoading(false);
      };

      //===================================================== model
      const loader = new GLTFLoader(manager);
      loader.load(design.config.model, (gltf) => {
        gltf.scene.traverse((node) => {
          if (node.isMesh) node.material = newMaterial;
        });
        const model = gltf.scene;
        model.scale.set(0.35, 0.35, 0.35);
        model.position.y = -1;
        model.rotation.y = -95 * (Math.PI / 180);
        scene.add(model);
      });

      //===================================================== resize
      const resizecanvas = () => {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth * 2;
        const height = canvas.clientHeight * 2;
        if (canvas.width !== width || canvas.height !== height) {
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        }
      };

      window.addEventListener("resize", resizecanvas);

      //===================================================== animate
      const render = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
        resizecanvas();
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
  }, [newMaterial, renderer, design.config.model]);

  return (
    <div className="scene-container" ref={canvasRef}>
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default Scene;
