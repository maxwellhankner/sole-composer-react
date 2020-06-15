import React, { useEffect, useRef, useState } from 'react';
import './Scene.css';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { drawPartFunction, drawInitialFunction } from '../../helpers/drawFunctions.js';
import { partsObject } from '../../helpers/partsObject.js'


function Scene({ design }) {

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

    const [renderer] = useState(new THREE.WebGLRenderer());

    const [textureCanvas, setTextureCanvas] = useState(createCanvas());

    const [texture] = useState(createTexture());

    const [newMaterial] = useState(createMaterial(texture));

    useEffect(() => {
        canvasRef.current.appendChild(renderer.domElement);
        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;

        //===================================================== scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf9f9f9);

        //===================================================== camera
        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
        camera.position.z = 7;
        camera.position.y = 0;

        //===================================================== orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.maxDistance = 9;
        controls.minDistance = 3;
        controls.minPolarAngle = Math.PI * (1 / 5);
        controls.maxPolarAngle = Math.PI * (6 / 7);
        controls.enablePan = false;
        controls.update();

        //===================================================== lights
        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        //===================================================== model
        var loader = new GLTFLoader();
        var model;
        loader.load(
            "assets/models/af1_ao.gltf", function (gltf) {
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

    }, [newMaterial, renderer])

    const oldDesignRef = useRef({});

    useEffect(() => {

        const getDesignPartChanges = (obj1, obj2) => {
            if(!obj1.parts){
                return
            }
            const obj1Keys = Object.keys(obj1.parts);
            for (let objKey of obj1Keys) {
                if(obj1.parts[objKey].color !== obj2.parts[objKey].color){
                    return objKey;
                }
            }
        }

        const initialCanvas = (design) => {
            drawInitialFunction(texture, textureCanvas, setTextureCanvas, '#ffbb55')
            for (const property in design.parts) {
                drawPartFunction(texture, textureCanvas, setTextureCanvas, design.parts[property].color, partsObject[property]);
            }
        }

        if (design) {
            const partChange = getDesignPartChanges(oldDesignRef.current, design);
            if(partChange){
                drawPartFunction(texture, textureCanvas, setTextureCanvas, design.parts[partChange].color, partsObject[partChange])
            }
            else{
                initialCanvas(design);
            }

            oldDesignRef.current = design;

        }

    }, [design, texture, textureCanvas])

    return (
        <div className="scene-container" ref={canvasRef} />
    )
}

export default Scene;