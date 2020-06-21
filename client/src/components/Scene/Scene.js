import React, { useEffect, useRef, useState } from 'react';
import './Scene.css';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { drawColorFunction, drawGraphicFunction } from '../../helpers/drawFunctions.js';
import { partsObject } from '../../helpers/partsObject.js';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


function Scene({ design, currentPartName, graphicVisualCanvas }) {

  const createCanvas = () => {
    var ctx = document.createElement("canvas").getContext('2d');
    ctx.canvas.width = 4096;
    ctx.canvas.height = 4096;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    return ctx
  }

  const createMaterial = (texture) => {
    var aoimg = new Image();
    aoimg.src = 'assets/images/ao_diffuse.png';
    var ao = new THREE.CanvasTexture(aoimg);
    ao.flipY = false;

    return new THREE.MeshStandardMaterial({
      map: texture,
      aoMap: ao
    })
  }

  const createTexture = () => {
    var texture = new THREE.CanvasTexture(textureCanvas.canvas);
    texture.flipY = false;

    return texture;
  }

  const canvasRef = useRef(null);

  const [renderer] = useState(new THREE.WebGLRenderer({ antialias: true }));

  const [textureCanvas, setTextureCanvas] = useState(createCanvas());

  const [texture] = useState(createTexture());

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
    let manager = new THREE.LoadingManager();
    manager.onLoad = () => {
      setIsLoading(false)
    }

    //===================================================== model
    var loader = new GLTFLoader(manager);
    var model;
    loader.load(
      design.model, function (gltf) {
        gltf.scene.traverse(function (node) {
          if (node.isMesh) node.material = newMaterial;
        });
        model = gltf.scene;
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

  }, [newMaterial, renderer, design.model])

  const oldDesignRef = useRef({});

  useEffect(() => {
    const updatePart = async (partChange) => {
      for (let i = 0; i < design.parts[partChange].layers.length; i++) {
        const isCurrentPart = (partChange === currentPartName);
        if (design.parts[partChange].layers[i].type === 'color') {
          await drawColorFunction(texture, textureCanvas, setTextureCanvas, design.parts[partChange].layers[i].color, partsObject[partChange], graphicVisualCanvas, isCurrentPart)
        }
        else {
          await drawGraphicFunction(texture, textureCanvas, setTextureCanvas, partsObject[partChange], design.parts[partChange].layers[i], graphicVisualCanvas, isCurrentPart)
        }
      }
    }

    if (currentPartName) {
      updatePart(currentPartName)
    }
    else {
      const updateAll = async () => {
        for (let x = 0; x < Object.keys(design.parts).length; x++) {
          const partChange = Object.keys(design.parts)[x]
          await updatePart(partChange)
        }
      }
      updateAll()
    }

    oldDesignRef.current = design;

  }, [design, texture, textureCanvas, currentPartName, graphicVisualCanvas])

  return (
    <div className="scene-container" ref={canvasRef} >
      <LoadingSpinner isLoading={isLoading} />
    </div>
  )
}

export default Scene;