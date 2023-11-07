import React, { useContext } from 'react';
import { GridContext } from './ParentGridBox';


//function for each single box and it is the child component
function ChildSingleBox({ id }) {
  const { switchBoxColor, isBoxOn } = useContext(GridContext);

  return (
    <div
      className={`box ${isBoxOn(id) ? 'on' : ''}`}
      onClick={() => switchBoxColor(id)}    //function which change the colour, which is described in the parent
    />
  );
}

export default ChildSingleBox;
