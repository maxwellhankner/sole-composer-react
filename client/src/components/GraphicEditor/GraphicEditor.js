import React, { useEffect } from 'react';
import {
	FaArrowDown,
	FaArrowLeft,
	FaArrowRight,
	FaArrowsAlt,
	FaArrowUp,
	FaCompressArrowsAlt,
	FaRedoAlt,
	FaUndoAlt,
} from 'react-icons/fa';
import './GraphicEditor.css';

function GraphicEditor({ props }) {
	const {
		currentLayer,
		currentPartName,
		graphicVisualCanvas,
		handlePartChangeManager,
		handleUpdateGraphicVisualCanvas,
		setLayersView,
	} = props;

	const handleMoveGraphic = (direction, distance) => {
		handlePartChangeManager([
			'graphic-moved',
			currentPartName,
			currentLayer,
			direction,
			distance,
		]);
	};

	useEffect(() => {
		const placeGraphicVisual = () => {
			let div = document.getElementById('graphic-visual-container');
			div.innerHTML = '';
			div.appendChild(graphicVisualCanvas);
		};
		placeGraphicVisual();
		handleUpdateGraphicVisualCanvas(currentPartName);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="graphic-editor-container">
			<div className="graphic-editor-buttons">
				<button
					className="graphic-edit-button"
					id="up-button"
					onClick={() => handleMoveGraphic('vert', -30)}
				>
					<FaArrowUp />
				</button>
				<button
					className="graphic-edit-button"
					id="down-button"
					onClick={() => handleMoveGraphic('vert', 30)}
				>
					<FaArrowDown />
				</button>
				<button
					className="graphic-edit-button"
					id="left-button"
					onClick={() => handleMoveGraphic('hor', -30)}
				>
					<FaArrowLeft />
				</button>
				<button
					className="graphic-edit-button"
					id="right-button"
					onClick={() => handleMoveGraphic('hor', 30)}
				>
					<FaArrowRight />
				</button>
				<button
					className="graphic-edit-button"
					id="scale-up-button"
					onClick={() => handleMoveGraphic('scale', 1.1)}
				>
					<FaArrowsAlt />
				</button>
				<button
					className="graphic-edit-button"
					id="scale-down-button"
					onClick={() => handleMoveGraphic('scale', 0.9)}
				>
					<FaCompressArrowsAlt />
				</button>
				<button
					className="graphic-edit-button"
					id="clockwise-button"
					onClick={() => handleMoveGraphic('rotate', 5)}
				>
					<FaRedoAlt />
				</button>
				<button
					className="graphic-edit-button"
					id="counterclockwise-button"
					onClick={() => handleMoveGraphic('rotate', -5)}
				>
					<FaUndoAlt />
				</button>
				<button
					className="graphic-interface-button"
					id="reset-button"
					onClick={() => handleMoveGraphic('reset', 0)}
				>
					Reset
				</button>
				<button
					className="graphic-interface-button"
					id="back-button"
					onClick={() => setLayersView('LayerOverview')}
				>
					Back
				</button>
			</div>
			<div id="graphic-visual-container"></div>
		</div>
	);
}

export default GraphicEditor;
