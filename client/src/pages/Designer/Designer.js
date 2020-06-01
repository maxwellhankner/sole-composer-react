import React, { useState, useEffect } from 'react';
import './Designer.css';
import NavBar from '../../components/NavBar/NavBar.js'
import Scene from '../../components/Scene/Scene.js'
import Interface from '../../components/Interface/Interface.js'

function Designer() {

  const [color, setColor] = useState();

  const [design, setDesign] = useState();

  useEffect(() => {
    fetch('/api/design')
    .then(res => res.json())
    .then(data => setDesign(data))
  }, [])

  return (
    <div className="designer-container">
        <NavBar />
        <Scene color={color} design={design}/>
        <Interface setColor={setColor} />
    </div>
  );
}

export default Designer;