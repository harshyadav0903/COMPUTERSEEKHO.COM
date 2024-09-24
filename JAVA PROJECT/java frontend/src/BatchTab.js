
import React, { useState } from 'react';
import CreateBatch from './CreateBatch';
import ShowBatch from './ShowBatch';

const BatchTab = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick('CreateBatch')}>Add Batch</button>
        <button onClick={() => handleButtonClick('ShowBatch')}>Show Batches</button>
      </div>

      <hr />

      {currentPage === 'CreateBatch' && (
        <div>
          <CreateBatch/>
        </div>
      )}

      {currentPage === 'ShowBatch' && (
        <div>
          <ShowBatch/>
        </div>
      )}
    </div>
  );
}

export default BatchTab;
