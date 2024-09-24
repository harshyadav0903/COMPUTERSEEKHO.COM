
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
        <button onClick={() => handleButtonClick('Staff')}>Show Staff</button>
      </div>

      <hr />

      {currentPage === 'AddStaff' && (
        <div>
          <AddStaff/>
        </div>
      )}

      {currentPage === 'Staff' && (
        <div>
          <Staff/>
        </div>
      )}
    </div>
  );
}

export default StaffTab;
