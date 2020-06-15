import React, { useState }  from 'react';
import './Interface.css';
// import ColorTester from '../ColorTester/ColorTester'
import ColorPicker from '../ColorPicker/ColorPicker'
import PartSelector from '../PartSelector/PartSelector'

function Interface({ design, setDesign }) {

  const handleDesignChange = (part, color) => {
    // console.log(color)
    // console.log('design:', design);
    const tempDesign = JSON.parse(JSON.stringify(design));
    tempDesign.parts[part].color = color;
    // console.log('trempDesign', tempDesign);
    setDesign(tempDesign);
  }

  const [currentPart, setCurrentPart] = useState(0)

  return (
    <div className="interface-container">
      <PartSelector currentPart={currentPart} setCurrentPart={setCurrentPart}/>
      {/* <ColorTester handleDesignChange={handleDesignChange}/> */}
      <ColorPicker design={design} handleDesignChange={handleDesignChange} currentPart={currentPart}/>
    </div>
  );
}

export default Interface;