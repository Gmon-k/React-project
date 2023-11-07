import React, { useState, createContext } from 'react';
import ChildSingleBox from './ChildSingleBox';

export const GridContext = createContext();

//function for the Parent Grid Box
function ParentGridBox() {

  //Function to track the colour of the each box for multiple click
  const [gridState, setGridState] = useState([false, false, false, false]);

  //Function to switch box colour
  const switchBoxColor = (boxIndex) => {
    const newGridState = [...gridState];
    newGridState[boxIndex] = !newGridState[boxIndex];
    setGridState(newGridState);
  };

  //function to check if the box is ON state
  const isBoxOn = (boxIndex) => {
    return gridState[boxIndex];
  };

  //Count the number of ON state in the grid
  const onBoxCount = gridState.filter((box) => box).length;

  //HTML code for displaying
  return (
    <div>
      <h2>Number of Boxes ON: {onBoxCount}</h2>
      <div className="grid">
        <GridContext.Provider value={{ switchBoxColor, isBoxOn }}>
          <ChildSingleBox id={0} />
          <ChildSingleBox id={1} />
          <ChildSingleBox id={2} />
          <ChildSingleBox id={3} />
        </GridContext.Provider>
      </div>
    </div>
  );
}

export default ParentGridBox;
