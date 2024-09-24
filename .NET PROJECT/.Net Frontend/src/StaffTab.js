
import React, { useState } from 'react';
import AddStaff from './AddStaff';
import Staff from './Staff'

const StaffTab = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick('AddStaff')}>Add Staff</button>
        
      </div>
      <Staff/>
      <hr />

      {currentPage === 'AddStaff' && (
        <div>
          <AddStaff/>
        </div>
      )}
    </div>
  );
}

export default StaffTab;
