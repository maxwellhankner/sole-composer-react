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
						handleAddLayer(currentPart);
						setLayersView('Layers');
					}
				} >Color</button>
			</div>
			<div className='change-view-button'>
				<button>Graphic</button>
			</div>
		</div>
	);
}

export default AddLayerType;