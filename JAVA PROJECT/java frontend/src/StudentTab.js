
import React, { useState } from 'react';
import AddStudents from './AddStudents';
import ListAllStudents from './ListAllStudents'

const StudentTab = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick('AddStudents')}>Add Student</button>
        <button onClick={() => handleButtonClick('ListAllStudents')}>Show Students</button>
      </div>

      <hr />

      {currentPage === 'AddStudents' && (
        <div>
          <AddStudents/>
        </div>
      )}

      {currentPage === 'ListAllStudents' && (
        <div>
          <ListAllStudents/>
        </div>
      )}
    </div>
  );
}

export default StudentTab;
