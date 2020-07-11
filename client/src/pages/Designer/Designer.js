import React, { useEffect, useState } from 'react';
import './Designer.css';
import DesignerContainer from '../../components/DesignerContainer/DesignerContainer';
import NavBar from '../../components/NavBar/NavBar.js';
import { createTexture, createCanvas, createGraphicVisualCanvas } from '../../helpers/createFunctions';

function Designer() {

  const [designSpec, setDesignSpec] = useState()

  const [textureCanvas] = useState(createCanvas());
  const [outerOverlayCanvas] = useState(createCanvas());
  const [innerOverlayCanvas] = useState(createCanvas());

  const [texture] = useState(createTexture(textureCanvas));

  const [graphicVisualCanvas] = useState(createGraphicVisualCanvas())

  useEffect(() => {
    fetch('/api/design')
      .then(res => res.json())
      .then(data => {
        setDesignSpec(data)
      })
  }, [])

  if (designSpec) {
    return (
      <div className='designer-root-container'>
        <NavBar />
        <DesignerContainer designSpec={designSpec} textureCanvas={textureCanvas} texture={texture} outerOverlayCanvas={outerOverlayCanvas} innerOverlayCanvas={innerOverlayCanvas} graphicVisualCanvas={graphicVisualCanvas} />
      </div>
    );
  }
  else {
    return null;
  }

}

export default Designer;