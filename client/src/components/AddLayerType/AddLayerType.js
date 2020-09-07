import React from 'react';
import './AddLayerType.css';
import { layerTypes } from '../../helpers/partsObject';

function AddLayerType({ props }) {
	const { currentPartName, handleAddLayer, setLayersView } = props;
	return (
		<div className="design-preview-container">
			<div className="view-title">
				<p>Select Layer Type</p>
			</div>
			{layerTypes[currentPartName].types.map((type, i) => (
				<div key={i} className="change-view-button">
					{type === 'Mask' ? (
						<button
							onClick={() => {
								console.log('yo')
								setLayersView('MaskTypes');
							}}
						>
							{type}
						</button>
					) : (
						<button
							onClick={() => {
								handleAddLayer(type);
								setLayersView('LayerOverview');
							}}
						>
							{type}
						</button>
					)}
				</div>
			))}
		</div>
	);
}

export default AddLayerType;
