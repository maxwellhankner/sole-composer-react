import React, { useEffect, useState } from 'react';
import './Designer.css';
import DesignerContainer from '../../components/DesignerContainer/DesignerContainer';


function Designer() {

  console.log('designer component rendered')

  // const [design, setDesign] = useState();
  const [designSpec, setDesignSpec] = useState()

  useEffect(() => {
    console.log('design fetch')
    fetch('/api/design')
      .then(res => res.json())
      .then(data => {
        console.log('design set to data')
        setDesignSpec(data)
      })
  }, [])

  if (designSpec) {
    return (
      <DesignerContainer designSpec={designSpec} />
    );
  }
  else {
    console.log('return null')
    return null;
  }

}

export default Designer;