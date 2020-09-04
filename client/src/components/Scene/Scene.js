import React, { useEffect, useRef, useState } from 'react';
import './Scene.css';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function Scene({ design, texture }) {

  const createMaterial = (texture) => {
    const aoimg = new Image();
    aoimg.src = 'assets/images/ao_diffuse.png';
    const ao = new THREE.CanvasTexture(aoimg);
    ao.flipY = false;

    return new THREE.MeshStandardMaterial({
      map: texture,
      aoMap: ao
    });
  }

  const canvasRef = useRef(null);

  const [renderer] = useState(new THREE.WebGLRenderer({ antialias: true }));

  const [newMaterial] = useState(createMaterial(texture));

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      setIsLoading(false)
    }

    //===================================================== model
    const loader = new GLTFLoader(manager);
    loader.load(
      design.model, function (gltf) {
        gltf.scene.traverse(function (node) {
          if (node.isMesh) node.material = newMaterial;
        });
        const model = gltf.scene;
        model.scale.set(.35, .35, .35);
        model.position.y = -1;
        model.rotation.y = -95 * (Math.PI / 180);
        scene.add(model);
      }
    );

    //===================================================== resize
    window.addEventListener("resize", resizecanvas);

    function resizecanvas() {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth * 2;
      const height = canvas.clientHeight * 2;
      if (canvas.width !== width || canvas.height !== height) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    }

    //===================================================== animate
    const render = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(render);
      resizecanvas();
      controls.update();
    }

    render()

    //===================================================== cleanup
    return function cleanup() {
      cancelAnimationFrame(render);
      controls.dispose();
    }

  }, [newMaterial, renderer, design.model]);

  return (
    <div className="scene-container" ref={canvasRef} >
      <LoadingSpinner isLoading={isLoading} />
    </div>
  )
}

export default Scene;