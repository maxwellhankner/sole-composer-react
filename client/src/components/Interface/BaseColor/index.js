import React, { useState } from 'react';
import './ChangeBaseColor.css';
import { cloneDeep } from 'lodash';
import CustomColor from '../../CustomColor/CustomColor';

function ChangeBaseColor({
  handleViewChange,
  design,
  setDesign,
  setCanSave,
  handleUpdateBaseColor,
  currentShoe,
  setCurrentShoe,
}) {
  const initialRadioOption = () => {
    if (
      design.outlineData.baseColors.left === design.outlineData.baseColors.right
    ) {
      return 'both';
    } else {
      return currentShoe;
    }
  };

  const [radioOption, setRadioOption] = useState(initialRadioOption());
  const [baseColor, setBaseColor] = useState(
    design.outlineData.baseColors[currentShoe]
  );

  const updateBaseColor = () => {
    const tempDesign = cloneDeep(design);
    if (radioOption === 'left') {
      tempDesign.outlineData.baseColors.left = baseColor;
    } else if (radioOption === 'right') {
      tempDesign.outlineData.baseColors.right = baseColor;
    } else if (radioOption === 'both') {
      tempDesign.outlineData.baseColors.left = baseColor;
      tempDesign.outlineData.baseColors.right = baseColor;
    }
    setCanSave(true);
    setDesign(tempDesign);
    handleUpdateBaseColor(tempDesign);
  };

  const handleColorChange = (color) => {
    const newColor = color.hex || color;
    setBaseColor(newColor);
  };

  const handleRadioOption = (option) => {
    setRadioOption(option);
    if (option === 'right' || option === 'left') {
      setCurrentShoe(option);
      setBaseColor(design.outlineData.baseColors[option]);
    }
  };

  return (
    <div className="change-base-color-container">
      <div className="base-color-selector">
        <CustomColor color={baseColor} onChangeComplete={handleColorChange} />
      </div>
      <div className="base-color-buttons">
        <div className="base-color-radio">
          <div className="radio-container">
            <div
              className={`radio-option ${
                radioOption === 'left' ? 'radio-active' : null
              }`}
              onClick={() => {
                handleRadioOption('left');
              }}
            >
              <p>Left</p>
            </div>
            <div
              className={`radio-option ${
                radioOption === 'both' ? 'radio-active' : null
              }`}
              onClick={() => {
                handleRadioOption('both');
              }}
            >
              <p>Both</p>
            </div>
            <div
              className={`radio-option ${
                radioOption === 'right' ? 'radio-active' : null
              }`}
              onClick={() => {
                handleRadioOption('right');
              }}
            >
              <p>Right</p>
            </div>
          </div>
        </div>
        <div className="base-color-button">
          <button
            onClick={() =>
              handleColorChange(
                '#' +
                  (
                    '00000' + ((Math.random() * (1 << 24)) | 0).toString(16)
                  ).slice(-6)
              )
            }
          >
            Random
          </button>
        </div>
        <div className="base-color-button">
          <button onClick={() => updateBaseColor()}>Apply</button>
        </div>
        <div className="base-color-button">
          <button onClick={() => handleViewChange('DesignInfo')}>Done</button>
        </div>
      </div>
    </div>
  );
}

export default ChangeBaseColor;
