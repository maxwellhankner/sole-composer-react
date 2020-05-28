import React, { useEffect, useRef, useState } from 'react';
import './Scene.css';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



function Scene({ color }) {

    const createCanvas = (color) => {
        var ctx = document.createElement("canvas").getContext('2d');
        ctx.canvas.width = 4096;
        ctx.canvas.height = 4096;
        ctx.fillStyle = color;
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

    const updateMaterial = (color) => {
        var ctx = document.createElement("canvas").getContext('2d');
        ctx.canvas.width = 4096;
        ctx.canvas.height = 4096;
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        var tempCanvas = textureCanvas;
        tempCanvas.drawImage(ctx.canvas, 0, 0, ctx.canvas.width, ctx.canvas.height)
        setTextureCanvas(tempCanvas);
        texture.needsUpdate = true;

    }

    const canvasRef = useRef(null);

    const [renderer, setRenderer] = useState(new THREE.WebGLRenderer());

    const [textureCanvas, setTextureCanvas] = useState(createCanvas(color));

    const [texture, setTexture] = useState(createTexture());

    const [newMaterial, setNewMaterial] = useState(createMaterial(texture));

    useEffect(() => {
        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();
        renderer.setSize(width * 2, height * 2);
        renderer.setClearColor('#eeeeee');
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

        camera.position.z = 7;

        canvasRef.current.appendChild(renderer.domElement);

        const render = () => {
            renderer.render(scene, camera);
            requestAnimationFrame(render);
            controls.update();
        }

        render()

        return function cleanup() {
            cancelAnimationFrame(render);
            controls.dispose();
        }

    }, [])

    useEffect(() => {
        updateMaterial(color);
    }, [color])

    return (
        <div className="scene-container" ref={canvasRef} />
    )
}

export default Scene;