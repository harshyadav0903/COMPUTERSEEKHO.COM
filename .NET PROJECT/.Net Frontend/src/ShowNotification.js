import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the server
    fetch('https://localhost:7020/api/Notification')
      .then(res=>res.json())
      .then((data)=>{
        console.log(data);
        setNotifications(data);
      })
      
  }, []);

  const navigate=useNavigate();
  const handleUpdateClick = (notificationId) => {

    navigate(`/UpdateNotification/${notificationId}`)
    alert(notificationId);
    console.log(`Update button clicked for notification with ID ${notificationId}`);
  };

  return (
    <div>
      <h2>Notification List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Notification ID</th>
            <th style={tableHeaderStyle}>Arriving Date</th>
            <th style={tableHeaderStyle}>Expiry Date</th>
            <th style={tableHeaderStyle}>Notification Message</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map(notification => (
            <tr key={notification.notificationId}>
              <td style={tableCellStyle}>{notification.notificationId}</td>
              <td style={tableCellStyle}>{notification.arrivingDate}</td>
              <td style={tableCellStyle}>{notification.expiryDate}</td>
              <td style={tableCellStyle}>{notification.notificationMessage}</td>
              <td style={tableCellStyle}>
                <button onClick={() => handleUpdateClick(notification.notificationId)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
};

export default NotificationList;
