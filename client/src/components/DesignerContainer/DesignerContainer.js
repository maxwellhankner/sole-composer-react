import React, { useState, useEffect, useRef } from 'react';
import './DesignerContainer.css';
import Scene from '../../components/Scene/Scene.js';
import Interface from '../../components/Interface/Interface.js';
import {
	designObjectToCanvasObject,
	updateGraphicVisualCanvas,
	partChangeManager,
	overlayCanvasObjectToTextureCanvas,
	overlayChangeManager,
} from '../../canvasFunctions';
import { canvasObjectToTextureCanvas } from '../../canvasFunctions';

function DesignerContainer({
	designSpec,
	graphicVisualCanvas,
	innerOverlayCanvas,
	outerOverlayCanvas,
	texture,
	textureCanvas,
}) {

	const [design, setDesign] = useState(designSpec);

	const canvasObjectRef = useRef();
	const overlaysCanvasObjectRef = useRef();

	const handleUpdateGraphicVisualCanvas = (partName) => {
		if (partName === 'outerOverlay' || partName === 'innerOverlay') {
			updateGraphicVisualCanvas(
				graphicVisualCanvas,
				partName,
				overlaysCanvasObjectRef.current
			);
		} else {
			updateGraphicVisualCanvas(
				graphicVisualCanvas,
				partName,
				canvasObjectRef.current
			);
		}
	};

	const handlePartChangeManager = (changeArray) => {
		if (
			changeArray[1] === 'outerOverlay' ||
			changeArray[1] === 'innerOverlay'
		) {
			overlayChangeManager(
				changeArray,
				design,
				setDesign,
				texture,
				textureCanvas,
				graphicVisualCanvas,
				canvasObjectRef.current,
				outerOverlayCanvas,
				overlaysCanvasObjectRef.current
			);
		} else {
			partChangeManager(
				changeArray,
				design,
				setDesign,
				texture,
				textureCanvas,
				graphicVisualCanvas,
				canvasObjectRef.current
			);
		}
	};

	useEffect(() => {
		if (!canvasObjectRef.current) {
			const buildTexture = async () => {
				overlaysCanvasObjectRef.current = await designObjectToCanvasObject(
					design,
					'overlaysCanvasObject'
				);
				overlayCanvasObjectToTextureCanvas({
					design,
					overlayCanvasObject: overlaysCanvasObjectRef.current,
					overlayCanvas: outerOverlayCanvas,
					partName: 'outerOverlay',
					graphicVisualCanvas
				});
				overlayCanvasObjectToTextureCanvas({
					design,
					overlayCanvasObject: overlaysCanvasObjectRef.current,
					overlayCanvas: innerOverlayCanvas,
					partName: 'innerOverlay',
					graphicVisualCanvas
				});

				canvasObjectRef.current = await designObjectToCanvasObject(
					design,
					'partsCanvasObject',
					[outerOverlayCanvas, innerOverlayCanvas]
				);
				const newCanvas = canvasObjectToTextureCanvas({
					canvasObject: canvasObjectRef.current,
					size: textureCanvas.height,
					design
				});
				textureCanvas.getContext('2d').drawImage(newCanvas, 0, 0);

				texture.needsUpdate = true;
			};
			buildTexture();
		}
	});

	return (
		<div className="designer-container">
			<Scene
				design={design}
				texture={texture}
				textureCanvas={textureCanvas}
			/>
			<Interface
				design={design}
				setDesign={setDesign}
				graphicVisualCanvas={graphicVisualCanvas}
				handleUpdateGraphicVisualCanvas={
					handleUpdateGraphicVisualCanvas
				}
				handlePartChangeManager={handlePartChangeManager}
			/>
		</div>
	);
}

export default DesignerContainer;
