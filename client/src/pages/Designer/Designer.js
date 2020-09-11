import React, { useEffect, useState } from "react";
import "./Designer.css";
import DesignerContainer from "../../components/DesignerContainer/DesignerContainer";
import NavBar from "../../components/NavBar/NavBar.js";
import {
  createTexture,
  createCanvas,
  createGraphicVisualCanvas,
} from "../../canvasFunctions";

function Designer() {
  const [designSpec, setDesignSpec] = useState(null);
  const [graphicVisualCanvas, setGraphicVisualCanvas] = useState(null);
  const [innerOverlayCanvas, setInnerOverlayCanvas] = useState(null);
  const [outerOverlayCanvas, setOuterOverlayCanvas] = useState(null);
  const [textureCanvas, setTextureCanvas] = useState(null);
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    fetch("/api/design")
      .then((res) => res.json())
      .then((data) => {
        setDesignSpec(data);
      });
  }, []);

  useEffect(() => {
    if (designSpec) {
      setGraphicVisualCanvas(createGraphicVisualCanvas({ design: designSpec }));
      setInnerOverlayCanvas(createCanvas({ design: designSpec }));
      setOuterOverlayCanvas(createCanvas({ design: designSpec }));
      setTextureCanvas(createCanvas({ design: designSpec }));
    }
  }, [designSpec]);

  useEffect(() => {
    if (textureCanvas) {
      setTexture(createTexture(textureCanvas));
    }
  }, [textureCanvas]);

  const initialized =
    designSpec &&
    graphicVisualCanvas &&
    innerOverlayCanvas &&
    outerOverlayCanvas &&
    textureCanvas &&
    texture;

  if (initialized) {
    return (
      <div className="designer-root-container">
        <NavBar />
        <DesignerContainer
          designSpec={designSpec}
          graphicVisualCanvas={graphicVisualCanvas}
          innerOverlayCanvas={innerOverlayCanvas}
          outerOverlayCanvas={outerOverlayCanvas}
          texture={texture}
          textureCanvas={textureCanvas}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Hold Up..</h1>
      </div>
    );
  }
}

export default Designer;
