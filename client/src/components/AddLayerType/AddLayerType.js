import React from 'react';
import './AddLayerType.css';
import { layerTypes } from '../../helpers/partsObject';

function AddLayerType({ handleAddLayer, setLayersView, currentPartName }) {

	return (
		<div className="design-preview-container">
			<div className='view-title'>
				<p>Select Layer Type</p>
			</div>
			{layerTypes[currentPartName].types.map((type, i)=>
				<div key={i} className='change-view-button'>
					<button onClick={
						() => {
							handleAddLayer(type);
							setLayersView('Layers');
						}
					} >{type}</button>
				</div>
			)}
		</div>
	);
}

export default AddLayerType;