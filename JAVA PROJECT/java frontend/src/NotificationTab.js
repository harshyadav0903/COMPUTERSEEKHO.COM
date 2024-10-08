
import React, { useState } from 'react';
import AddNotification from './AddNotification';
import ShowNotification from './ShowNotification';

const NotificationTab = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick('AddNotification')}>Add Notification</button>
        <button onClick={() => handleButtonClick('ShowNotification')}>Show Notification</button>
      </div>

      <hr />

      {currentPage === 'AddNotification' && (
        <div>
          <AddNotification/>
        </div>
      )}

      {currentPage === 'ShowNotification' && (
        <div>
          <ShowNotification/>
        </div>
      )}
    </div>
  );
}

export default NotificationTab;
