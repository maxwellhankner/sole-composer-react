import React, { useState } from 'react';
import './Designer.css';
import NavBar from '../../components/NavBar/NavBar.js'
import Scene from '../../components/Scene/Scene.js'
import Interface from '../../components/Interface/Interface.js'

function Designer() {

  const [color, setColor] = useState('#ffffff');

  return (
    <div className="designer-container">
        <NavBar />
        <Scene color={color} />
        <Interface setColor={setColor} />
    </div>
  );
}

export default Designer;