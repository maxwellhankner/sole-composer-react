import React from 'react';
import './AddLayerType.css';

function AddLayerType({ handleAddLayer, currentPart, setLayersView }) {

	return (
		<div className="design-preview-container">
			<div className='view-title'>
				<p>Select Layer Type</p>
			</div>
			<div className='change-view-button'>
				<button onClick={
					() => {
						handleAddLayer(currentPart, 'Color');
						setLayersView('Layers');
					}
				} >Color</button>
			</div>
			<div className='change-view-button'>
				<button onClick={
					() => {
						handleAddLayer(currentPart, 'Graphic');
						setLayersView('Layers');
					}
				} >Graphic</button>
			</div>
		</div>
	);
}

export default AddLayerType;