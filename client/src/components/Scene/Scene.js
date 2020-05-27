import React, { useEffect, useRef, useState } from 'react';
import './Scene.css';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const createTexture = (color) => {
    // var ctx = document.getElementById('texture').getContext('2d');
    var ctx = document.createElement("canvas").getContext('2d');
    ctx.canvas.width = 4096;
    ctx.canvas.height = 4096;
    // ctx.fillStyle = "#fff";
    // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // var diffuseimg = new Image();
    // diffuseimg.src = 'assets/images/white_diffuse.png';
    // diffuseimg.onload = function () {
    //     ctx.drawImage(diffuseimg, 0, 0, ctx.canvas.width, ctx.canvas.height);
    // }

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    console.log(ctx.canvas.width)

    var texture = new THREE.CanvasTexture(ctx.canvas);
    texture.flipY = false;

    return texture;
}

function Scene({color}) {

    const canvasRef = useRef(null);

    const [renderer, setRenderer] = useState(new THREE.WebGLRenderer());

    const [texture, setTexture] = useState(createTexture(color));

    useEffect(() => {

        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        // setRenderer(new THREE.WebGLRenderer())
        console.log(renderer);
        const controls = new OrbitControls(camera, renderer.domElement);
        console.log(controls)
        controls.update();

        renderer.setSize(width, height);
        renderer.setClearColor('#ffe');

        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        // ===================================================== canvas texture
        var aoimg = new Image();
        aoimg.src = 'assets/images/ao_diffuse.png';
        var ao = new THREE.CanvasTexture(aoimg);
        ao.flipY = false;


        var newMaterial = new THREE.MeshStandardMaterial({
            map: texture,
            aoMap: ao
        });

        // var newMaterial = new THREE.MeshStandardMaterial({ color: '#00ff00' })

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


        camera.position.z = 8;

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
        // renderer.setClearColor(color);
        setTexture(createTexture(color))
        console.log(renderer)
    }, [color])



    return (
        <div className="scene-container" ref={canvasRef} />
    )
}

export default Scene;