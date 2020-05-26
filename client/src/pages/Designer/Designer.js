import React from 'react';
import './Designer.css';
import NavBar from '../../components/NavBar/NavBar.js'
import Scene from '../../components/Scene/Scene.js'
import Interface from '../../components/Interface/Interface.js'

function Designer() {

  return (
    <div className="designer-container">
        <NavBar />
        <Scene />
        <Interface />
    </div>
  );
}

export default Designer;