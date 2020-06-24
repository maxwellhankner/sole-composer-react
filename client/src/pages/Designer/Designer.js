import React, { useEffect, useState } from 'react';
import './Designer.css';
import DesignerContainer from '../../components/DesignerContainer/DesignerContainer';
import { createTexture, createCanvas, createGraphicVisualCanvas } from '../../helpers/createFunctions';

function Designer() {

  const [designSpec, setDesignSpec] = useState()

  const [textureCanvas] = useState(createCanvas());

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
      <DesignerContainer designSpec={designSpec} textureCanvas={textureCanvas} texture={texture} graphicVisualCanvas={graphicVisualCanvas} />
    );
  }
  else {
    return null;
  }

}

export default Designer;