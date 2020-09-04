import React, { useState } from 'react';
import { partsObject } from '../../helpers/partsObject';
import LayerDictionary from './Constants';
import './LayersView.css';

function LayersView({
	currentLayer,
	currentPart,
	design,
	graphicVisualCanvas,
	handleDesignChangeManager,
	handleUpdateGraphicVisualCanvas,
	handleViewChange,
	setCurrentLayer,
	setCurrentPart,
}) {
	const [focusLayer, setFocusLayer] = useState();
	const [layersView, setLayersView] = useState('LayerOverview');

	const currentPartName = Object.keys(partsObject)[currentPart];

	let numberOfLayers;
	let allLayers;

	if (
		currentPartName === 'outerOverlay' ||
		currentPartName === 'innerOverlay'
	) {
		numberOfLayers = design.overlays[currentPartName].layers.length;
		allLayers = design.overlays[currentPartName].layers;
	} else {
		numberOfLayers = design.parts[currentPartName].layers.length;
		allLayers = design.parts[currentPartName].layers;
	}

	const handleAddLayer = (type) => {
		handleDesignChangeManager(['layer-added', currentPartName, type]);
		setFocusLayer(numberOfLayers);
	};

	const handleAddMaskLayer = (maskType, maskLink) => {
		handleDesignChangeManager([
			'layer-added',
			currentPartName,
			'Mask',
			maskType,
			maskLink,
		]);
		setFocusLayer(numberOfLayers);
	};

	const Component = LayerDictionary[layersView];

	const propsToPassDown = {
		allLayers,
		currentPart,
		currentLayer,
		currentPartName,
		design,
		focusLayer,
		graphicVisualCanvas,
		handleAddLayer,
		handleAddMaskLayer,
		handleDesignChangeManager,
		handleUpdateGraphicVisualCanvas,
		handleViewChange,
		setCurrentLayer,
		setCurrentPart,
		setFocusLayer,
		setLayersView,
	};

	return <Component props={propsToPassDown} />;
}

export default LayersView;
