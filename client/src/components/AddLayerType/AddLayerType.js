import React from 'react';
import './AddLayerType.css';

function AddLayerType({ handleAddLayer, setLayersView }) {

	return (
		<div className="design-preview-container">
			<div className='view-title'>
				<p>Select Layer Type</p>
			</div>
			<div className='change-view-button'>
				<button onClick={
					() => {
						handleAddLayer('Color');
						setLayersView('Layers');
					}
				} >Color</button>
			</div>
			<div className='change-view-button'>
				<button onClick={
					() => {
						handleAddLayer('Graphic');
						setLayersView('Layers');
					}
				} >Graphic</button>
			</div>
		</div>
	);
}

export default AddLayerType;