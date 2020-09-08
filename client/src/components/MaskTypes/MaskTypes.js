import React from 'react';
import './MaskTypes.css';
import { maskTypes } from '../../helpers/partsObject';

function MaskTypes({ props }) {
	const { currentPartName, handleAddMaskLayer, setLayersView } = props;
	return (
		<div className="design-preview-container">
			<div className="view-title">
				<p>Select Mask Type</p>
			</div>

			{maskTypes[currentPartName].map((type, i) => (
				<div key={i} className="change-view-button">
					<button
						onClick={() => {
							handleAddMaskLayer(type[0], type[1]);
							setLayersView('LayerOverview');
						}}
					>
						{type[0]}
					</button>
				</div>
			))}
		</div>
	);
}

export default MaskTypes;
