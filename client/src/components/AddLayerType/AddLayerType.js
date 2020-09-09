import React from 'react';
import './AddLayerType.css';

function AddLayerType({ props }) {
	const { design, currentPartName, handleAddLayer, setLayersView } = props;
	return (
		<div className="design-preview-container">
			<div className="view-title">
				<p>Select Layer Type</p>
			</div>
			{design.config.layerTypes[currentPartName].types.map((type, i) => (
				<div key={i} className="change-view-button">
					{type === 'Mask' ? (
						<button
							onClick={() => {
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
