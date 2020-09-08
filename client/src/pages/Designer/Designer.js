import React, { useEffect, useState } from 'react';
import './Designer.css';
import DesignerContainer from '../../components/DesignerContainer/DesignerContainer';
import NavBar from '../../components/NavBar/NavBar.js';
import {
	createTexture,
	createCanvas,
	createGraphicVisualCanvas,
} from '../../canvasFunctions';

function Designer() {

	const [designSpec, setDesignSpec] = useState();
	const [graphicVisualCanvas] = useState(createGraphicVisualCanvas());
	const [innerOverlayCanvas] = useState(createCanvas());
	const [outerOverlayCanvas] = useState(createCanvas());

	const [textureCanvas] = useState(createCanvas());
	const [texture] = useState(createTexture(textureCanvas));

	useEffect(() => {
		fetch('/api/design')
			.then((res) => res.json())
			.then((data) => {
				setDesignSpec(data);
			});
	}, []);

	if (designSpec) {
		
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
