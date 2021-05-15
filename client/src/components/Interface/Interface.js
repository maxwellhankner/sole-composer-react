import React, { useState } from 'react';
import {
  InterfaceContainer,
  InterfaceLeft,
  InterfaceRight,
} from './styledComponents';
import DesignerNav from './Nav';
import DesignInfo from './DesignInfo';
import DesignMenu from './DesignMenu';
import Visibility from './Visibility';
import BaseColor from './BaseColor';
import Layers from './Layers';
import EditName from './EditName';

function Interface({
  design,
  setDesign,
  graphicVisualCanvas,
  handleUpdateGraphicVisualCanvas,
  handleChangeManager,
  handleUpdateBaseColor,
  userData,
  currentPart,
  setCurrentPart,
  currentShoe,
  setCurrentShoe,
  shoeVisibility,
  setShoeVisibility,
  view,
  setView,
  layersView,
  setLayersView,
  currentLayer,
  setCurrentLayer,
  setCameraReset,
}) {
  const [canSave, setCanSave] = useState(false);

  const handleViewChange = (viewChange) => {
    setView(viewChange);
  };

  let ComponenetToRender;

  if (view === 'DesignMenu') {
    ComponenetToRender = (
      <DesignMenu
        handleViewChange={handleViewChange}
        design={design}
        setDesign={setDesign}
        canSave={canSave}
        setCanSave={setCanSave}
        userData={userData}
        currentShoe={currentShoe}
        setCurrentShoe={setCurrentShoe}
        shoeVisibility={shoeVisibility}
        setShoeVisibility={setShoeVisibility}
        setCameraReset={setCameraReset}
      />
    );
  } else if (view === 'Layers') {
    ComponenetToRender = (
      <Layers
        layersView={layersView}
        setLayersView={setLayersView}
        handleViewChange={handleViewChange}
        design={design}
        setDesign={setDesign}
        currentShoe={currentShoe}
        setCurrentShoe={setCurrentShoe}
        currentPart={currentPart}
        setCurrentPart={setCurrentPart}
        currentLayer={currentLayer}
        setCurrentLayer={setCurrentLayer}
        graphicVisualCanvas={graphicVisualCanvas}
        handleUpdateGraphicVisualCanvas={handleUpdateGraphicVisualCanvas}
        handleChangeManager={handleChangeManager}
        setCanSave={setCanSave}
      />
    );
  } else if (view === 'ChangeDesignName') {
    ComponenetToRender = (
      <EditName
        handleViewChange={handleViewChange}
        design={design}
        setDesign={setDesign}
        setCanSave={setCanSave}
      />
    );
  } else if (view === 'ChangeBaseColor') {
    ComponenetToRender = (
      <BaseColor
        handleViewChange={handleViewChange}
        design={design}
        setDesign={setDesign}
        setCanSave={setCanSave}
        handleUpdateBaseColor={handleUpdateBaseColor}
        currentShoe={currentShoe}
        setCurrentShoe={setCurrentShoe}
      />
    );
  } else if (view === 'DesignInfo') {
    ComponenetToRender = <DesignInfo design={design} />;
  } else if (view === 'DesignVisibility') {
    ComponenetToRender = (
      <Visibility
        currentShoe={currentShoe}
        setCurrentShoe={setCurrentShoe}
        shoeVisibility={shoeVisibility}
        setShoeVisibility={setShoeVisibility}
      />
    );
  }

  return (
    <InterfaceContainer>
      <InterfaceLeft>{ComponenetToRender}</InterfaceLeft>
      <InterfaceRight>
        <DesignerNav handleViewChange={handleViewChange} view={view} />
      </InterfaceRight>
    </InterfaceContainer>
  );
}

export default Interface;
