

import React, { useState } from 'react';
import Company from './Company';
import ListCompany from './ListCompany';

const CompanyTab = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick('Company')}>Add Company</button>
        <button onClick={() => handleButtonClick('ListCompany')}>Show Company</button>
      </div>

      <hr />

      {currentPage === 'Company' && (
        <div>
          <Company/>
        </div>
      )}

      {currentPage === 'ListCompany' && (
        <div>
          <ListCompany/>
        </div>
      )}
    </div>
  );
}

export default CompanyTab;
