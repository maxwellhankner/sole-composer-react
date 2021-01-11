import React from 'react';
import './CustomColor.css';
import { CustomPicker } from 'react-color';
import CustomPointer from '../CustomPointer/CustomPointer';
import {
  EditableInput,
  Hue,
  Saturation,
} from 'react-color/lib/components/common';

export const CustomColor = ({ hex, hsl, hsv, onChange }) => {
  const styles = {
    hue: {
      height: 18,
      position: 'relative',
      marginBottom: 9,
      overflow: 'hidden',
    },
    saturation: {
      width: '100%',
      height: 120,
      position: 'relative',
      marginBottom: 9,
      overflow: 'hidden',
    },
    input: {
      width: '47%',
      height: '30px',
      border: 'none',
      borderRadius: 'none',
      fontSize: '.7rem',
      WebkitAppearance: 'none',
      WebkitBorderRadius: 0,
      boxShadow: 'none',
      display: 'block',
      paddingLeft: '3%',
      paddingRight: '0px',
    },
    swatch: {
      width: '100%',
      height: '100%',
      background: hex,
    },
    inputContainer: {
      background: hex,
    },
  };
  return (
    <div className='custom-color'>
      <div style={styles.hue}>
        <Hue hsl={hsl} onChange={onChange} pointer={CustomPointer} />
      </div>

      <div style={styles.saturation}>
        <Saturation
          hsl={hsl}
          hsv={hsv}
          onChange={onChange}
          pointer={CustomPointer}
        />
      </div>

      <div className='color-input' style={styles.inputContainer}>
        <EditableInput
          style={{ input: styles.input }}
          className='custom-color-input'
          value={hex}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CustomPicker(CustomColor);
