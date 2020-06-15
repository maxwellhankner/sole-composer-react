import React  from 'react';
import './Interface.css';
import ColorTester from '../ColorTester/ColorTester'

function Interface({ design, setDesign }) {

  const handleDesignChange = (part, color) => {
    // console.log(color)
    // console.log('design:', design);
    const tempDesign = JSON.parse(JSON.stringify(design));
    tempDesign.parts[part].color = color;
    // console.log('trempDesign', tempDesign);
    setDesign(tempDesign);
  }

  return (
    <div className="interface-container">
      <ColorTester handleDesignChange={handleDesignChange}/>
    </div>
  );
}

export default Interface;