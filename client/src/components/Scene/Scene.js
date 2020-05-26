import React, { useEffect, useRef } from 'react';
import './Scene.css';
import * as THREE from "three";

function Scene() {

    const canvasRef = useRef(null);

    useEffect(() => {
        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(width, height);
        renderer.setClearColor('#eeeeee');

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

        camera.position.z = 5;

        renderer.render(scene, camera);

        canvasRef.current.appendChild(renderer.domElement);

    }, [])

    return (
        <div className="scene-container" ref={canvasRef} />
    )
}

export default Scene;