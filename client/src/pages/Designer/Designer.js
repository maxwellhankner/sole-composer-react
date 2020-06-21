import React, { useState, useEffect, useRef } from 'react';
import './Designer.css';
import NavBar from '../../components/NavBar/NavBar.js';
import Scene from '../../components/Scene/Scene.js';
import Interface from '../../components/Interface/Interface.js';
import { canvasObjectToFinalTexture, designObjectToCanvasObject, createCanvasObjectPart, updateFinalTexturePart } from '../../helpers/drawFunctions';
// import { designObject } from '../../helpers/partsObject';

function Designer() {

  const [design, setDesign] = useState();

  const [currentPartName, setCurrentPartName] = useState();

  const graphicVisualCanvas = useRef();
  graphicVisualCanvas.current = document.createElement('canvas');
  graphicVisualCanvas.current.id = 'graphic-visual-canvas';
  graphicVisualCanvas.current.width = 4096;
  graphicVisualCanvas.current.height = 4096;


  const canvasObjectRef = useRef();
  const finalTextureCanvasRef = useRef();


  useEffect(() => {
    fetch('/api/design')
      .then(res => res.json())
      .then(data => setDesign(data))
  }, [])

  useEffect(() => {
    if (design && currentPartName) {
      const updatePart = async () => {
        const updated = await createCanvasObjectPart(design.parts[currentPartName].layers, currentPartName)
        canvasObjectRef.current[currentPartName] = updated

        // finalTextureCanvasRef.current = canvasObjectToFinalTexture(canvasObjectRef.current)
        updateFinalTexturePart(finalTextureCanvasRef.current, updated, currentPartName)
        // document.body.appendChild(finalTextureCanvasRef.current);
      }

      updatePart()
    }
    else if (design) {
      const buildTexture = async () => {
        canvasObjectRef.current = await designObjectToCanvasObject(design);

        finalTextureCanvasRef.current = canvasObjectToFinalTexture(canvasObjectRef.current)
        document.body.appendChild(finalTextureCanvasRef.current);
      }

      buildTexture()
    }

  }, [design, currentPartName])

  if (design) {
    return (
      <div className="designer-container">
        <NavBar />
        <Scene design={design} currentPartName={currentPartName} graphicVisualCanvas={graphicVisualCanvas.current} />
        <Interface design={design} setDesign={setDesign} setCurrentPartName={setCurrentPartName} graphicVisualCanvas={graphicVisualCanvas.current} />
      </div>
    );
  }
  else {
    return null;
  }

}

export default Designer;