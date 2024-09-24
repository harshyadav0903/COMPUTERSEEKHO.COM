import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the server
    fetch(('http://localhost:8084/api/notification/ShowAll'))
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
            <tr key={notification.notification_id}>
              <td style={tableCellStyle}>{notification.notification_id}</td>
              <td style={tableCellStyle}>{notification.arriving_date}</td>
              <td style={tableCellStyle}>{notification.expiry_date}</td>
              <td style={tableCellStyle}>{notification.notification_message}</td>
              <td style={tableCellStyle}>
                <button onClick={() => handleUpdateClick(notification.notification_id)}>
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
