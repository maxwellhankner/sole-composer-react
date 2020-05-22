import React, { useState, useEffect } from 'react';
import './design.css';

function Design() {

  const [design, setDesign] = useState({});

  useEffect(() => {
    fetch('/api/design')
    .then(res => res.json())
    .then(result => setDesign(result))
  }, [])

  return (
    <div>
      <h2>Design</h2>
      <p>{design.model}</p>
    </div>
  );
}

export default Design;