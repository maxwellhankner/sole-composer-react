import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { partLookup } from './partLookup';
import './Scene.css';

function Shoe({
  design,
  texture,
  right,
  setCurrentPart,
  setCurrentShoe,
  alone,
  setLayersView,
  setCurrentLayer,
  setView,
  redMapCanvas,
}) {
  const group = useRef();
  const { nodes } = useGLTF(
    `/api/assets/models/${design.configData.source.model}`
  );
  const aoMap = useLoader(
    THREE.TextureLoader,
    `/api/assets/designimages/${
      design.configData.source[right ? 'aoMapRight' : 'aoMapLeft']
    }`
  );
  aoMap.flipY = false;

  let x;
  let y;
  const pointerDown = (e) => {
    e.stopPropagation();
    x = e.clientX;
    y = e.clientY;
  };

  const pointerUp = (e) => {
    e.stopPropagation();
    if (
      e.clientX > x - 5 &&
      e.clientX < x + 5 &&
      e.clientY > y - 5 &&
      e.clientY < y + 5
    ) {
      clickShoe(e);
    }
  };

  const clickShoe = (e) => {
    if (e.delta < 10) {
      const x = Math.floor(e.uv.x * 1000);
      const y = Math.floor(e.uv.y * 1000);
      const colorValues = redMapCanvas.getContext('2d').getImageData(x, y, 1, 1)
        .data;
      const part = partLookup(colorValues[0]);
      if (part || part === 0) {
        setLayersView('LayerOverview');
        setCurrentLayer(-1);
        setView('Layers');
        setCurrentPart(part);
        setCurrentShoe(right ? 'right' : 'left');
      }
    }
  };

  return (
    <group
      ref={group}
      dispose={null}
      onPointerDown={(e) => pointerDown(e)}
      onPointerUp={(e) => pointerUp(e)}
    >
      <mesh
        geometry={nodes.af1.geometry}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[0, -1, alone ? 0 : right ? 1.3 : -1.3]}
        scale={[right ? 0.35 : -0.35, 0.35, 0.35]}
      >
        <meshStandardMaterial aoMap={aoMap} map={texture} />
      </mesh>
    </group>
  );
}

const Scene = ({
  design,
  rightTexture,
  leftTexture,
  texturesLoaded,
  setCurrentPart,
  setCurrentShoe,
  shoeVisibility,
  setLayersView,
  setCurrentLayer,
  setView,
  redMapCanvas,
  cameraReset,
  setCameraReset,
}) => {
  useEffect(() => {
    console.log('hey', texturesLoaded);
  }, [texturesLoaded]);

  function CameraRig({ reset }) {
    if (reset) {
      const state = useThree();
      state.camera.position.set(5.5, 1.5, 5.5);
      setCameraReset(false);
    }
    return null;
  }

  return (
    <div className="scene-container" id="scene-container-id">
      <Canvas
        camera={{ fov: 45 }}
        linear
        dpr={3}
        gl={{ preserveDrawingBuffer: true }}
      >
        <CameraRig reset={cameraReset} />
        <ambientLight />
        <Suspense fallback={null}>
          {shoeVisibility.right && (
            <Shoe
              right
              design={design}
              texture={rightTexture}
              setCurrentPart={setCurrentPart}
              setCurrentShoe={setCurrentShoe}
              alone={!shoeVisibility.left}
              setLayersView={setLayersView}
              setCurrentLayer={setCurrentLayer}
              setView={setView}
              redMapCanvas={redMapCanvas}
            />
          )}
          {shoeVisibility.left && (
            <Shoe
              design={design}
              texture={leftTexture}
              setCurrentPart={setCurrentPart}
              setCurrentShoe={setCurrentShoe}
              alone={!shoeVisibility.right}
              setLayersView={setLayersView}
              setCurrentLayer={setCurrentLayer}
              setView={setView}
              redMapCanvas={redMapCanvas}
            />
          )}
        </Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(Math.PI * 3) / 4}
          minDistance={4}
          maxDistance={12}
          enablePan={false}
          enableDamping={true}
        />
      </Canvas>
      {!texturesLoaded && <LoadingSpinner />}
    </div>
  );
};

export default Scene;
