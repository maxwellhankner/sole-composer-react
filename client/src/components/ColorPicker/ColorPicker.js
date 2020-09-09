import React, { useState, useEffect } from 'react';
import './ColorPicker.css';
import { handleConvertPartName } from '../../helpers/convertPartNames';
import CurrentColors from '../CurrentColors/CurrentColors';
import CustomColor from '../CustomColor/CustomColor';

function ColorPicker({ props }) {
	const {
		currentLayer,
		currentPartName,
		design,
		handlePartChangeManager,
		setLayersView,
	} = props;

	const [currentColor, setCurrentColor] = useState('#ffffaa');
	const [colorsArray, setColorsArray] = useState([]);

	useEffect(() => {
		const getDesignColors = () => {
			const colors = [];
			for (const property in design.outline.parts) {
				for (const layer in design.outline.parts[property].layers) {
					if (design.outline.parts[property].layers[layer].type === 'color') {
						const thisColor =
							design.outline.parts[property].layers[layer].color;
						if (!colors.includes(thisColor)) {
							colors.push(thisColor);
						}
					}
				}
			}
			return colors;
		};

		setColorsArray(getDesignColors());

		if (
			currentPartName === 'outerOverlay' ||
			currentPartName === 'innerOverlay'
		) {
			setCurrentColor(
				design.outline.overlays[currentPartName].layers[currentLayer].color
			);
		} else {
			setCurrentColor(
				design.outline.parts[currentPartName].layers[currentLayer].color
			);
		}
	}, [design, currentPartName, currentLayer, setColorsArray]);

	const handleColorChange = (color) => {
		const newColor = color.hex || color;
		setCurrentColor(color);
		handlePartChangeManager([
			'color-changed',
			currentPartName,
			currentLayer,
			newColor,
		]);
	};

	return (
		<div className="color-picker-container">
			<div className="view-title">
				<p>{handleConvertPartName(currentPartName)}</p>
			</div>
			<div className="random-color">
				<button
					onClick={() =>
						handleColorChange(
							'#' +
								Math.floor(Math.random() * 16777215).toString(
									16
								)
						)
					}
				>
					Random Color
				</button>
			</div>
			<div>
				<CurrentColors
					colorsArray={colorsArray}
					handleColorChange={handleColorChange}
				/>
			</div>
			<div>
				<CustomColor
					color={currentColor}
					onChangeComplete={handleColorChange}
				/>
			</div>
			<div className="change-view-button">
				<button onClick={() => setLayersView('LayerOverview')}>
					Back
				</button>
			</div>
		</div>
	);
}

export default ColorPicker;
