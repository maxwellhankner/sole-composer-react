import React from 'react';
import { FaLayerGroup, FaBars, FaEye, FaPaintRoller } from 'react-icons/fa';
import { NavContainer, NavOption } from './styledComponents';

function Nav({ handleViewChange, view }) {
  console.log(view);
  const viewManager = (viewName) => {
    if (view === viewName) {
      handleViewChange('DesignInfo');
    } else {
      handleViewChange(viewName);
    }
  };

  return (
    <NavContainer>
      <NavOption
        selected={view === 'Layers'}
        onClick={() => viewManager('Layers')}
      >
        <FaLayerGroup />
      </NavOption>
      <NavOption
        selected={view === 'ChangeBaseColor'}
        onClick={() => viewManager('ChangeBaseColor')}
      >
        <FaPaintRoller />
      </NavOption>
      <NavOption
        selected={view === 'DesignVisibility'}
        onClick={() => viewManager('DesignVisibility')}
      >
        <FaEye />
      </NavOption>
      <NavOption
        selected={view === 'DesignMenu' || view === 'ChangeDesignName'}
        onClick={() => viewManager('DesignMenu')}
      >
        <FaBars />
      </NavOption>
    </NavContainer>
  );
}

export default Nav;
