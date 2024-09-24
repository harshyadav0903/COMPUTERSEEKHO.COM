
import React, { useState } from 'react';
import PlacementData from './PlacementData';
import ShowPlacement from './ShowPlacement';

const PlacementTab = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick('PlacementData')}>Show Placement Details</button>
        <button onClick={() => handleButtonClick('ShowPlacement')}>Show Placed Students</button>
      </div>

      <hr />

      {currentPage === 'PlacementData' && (
        <div>
          <PlacementData/>
        </div>
      )}

      {currentPage === 'ShowPlacement' && (
        <div>
          <ShowPlacement/>
        </div>
      )}
    </div>
  );
}

export default PlacementTab;
