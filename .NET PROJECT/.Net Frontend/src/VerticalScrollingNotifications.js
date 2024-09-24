import React, { useEffect, useState } from 'react';
import "./VerticalScrollingNotifications.css";

const VerticalScrollingNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('https://localhost:7020/api/Notification');

        if (!response.ok) {
          throw new Error(`Failed to fetch notifications: ${response.statusText}`);
        }

        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const nonExpiredNotifications = notifications.filter(notification => {
    const currentDate = new Date();
    const expiryDate = new Date(notification.expiryDate);
    const arrivingDate = new Date(notification.arrivingDate);

    return expiryDate >= currentDate && arrivingDate <= currentDate;
});

  return (
    <div className="vertical-scrolling-container">
      <div className="scrolling-content">
        {nonExpiredNotifications.map((notification, index) => (
          <div key={index} className="notification-message">
            <p>{notification.notificationMessage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalScrollingNotifications;