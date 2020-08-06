import React from "react";
import './CustomColor.css';
import { CustomPicker } from "react-color";
import CustomPointer from "../CustomPointer/CustomPointer";
import { EditableInput, Hue, Saturation } from "react-color/lib/components/common";

export const CustomColor = ({ hex, hsl, hsv, onChange }) => {
  const styles = {
    hue: {
      height: 15,
      position: "relative",
      marginBottom: 10
    },
    saturation: {
      "width": "100%",
      height: 100,
      position: "relative",
      marginBottom: 10
    },
    input: {
      'width': '100%',
      'height': '100%',
      border: 'none',
      fontSize: '.7rem',
      // border: `1px solid ${hex}`,
      padding: 'none !important',
      paddingLeft: 10,
      boxShadow: 'none'
    },
    swatch: {
      'width': '100%',
      'height': '100%',
      background: hex,
      padding: '1px 0px'
    }
  };
  return (
    <div className="custom-color" >
      <div style={styles.hue}>
        <Hue hsl={hsl} onChange={onChange} pointer={CustomPointer} />
      </div>

      <div style={styles.saturation}>
        <Saturation hsl={hsl} hsv={hsv} onChange={onChange} pointer={CustomPointer} />
      </div>

      {/* <div style={{ display: "flex", marginBottom: 10 }}> */}
      <div className="color-input">
        <EditableInput
          style={{ input: styles.input }}
          className="custom-color-input"
          value={hex}
          onChange={onChange}
        />
        <div style={styles.swatch} />
      </div>
    </div>
  );
};

export default CustomPicker(CustomColor);