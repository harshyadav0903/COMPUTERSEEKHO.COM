import React, { useEffect, useState } from 'react';
import "./VerticalScrollingNotifications.css";

const VerticalScrollingNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:8084/api/notification/ShowAll');

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
    const expiryDate = new Date(notification.expiry_date);
    return expiryDate >= currentDate;
  });

  return (
    <div className="vertical-scrolling-container">
      <div className="scrolling-content">
        {nonExpiredNotifications.map((notification, index) => (
          <div key={index} className="notification-message">
            <p>{notification.notification_message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalScrollingNotifications;