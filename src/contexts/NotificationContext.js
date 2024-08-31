import React, { createContext, useState, useEffect, useCallback } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = useCallback(async () => {
    // Simulating API call
    const mockNotifications = [
      { id: 1, message: 'New payout available', type: 'payment' },
      { id: 2, message: 'Product update: Commission increased', type: 'product' },
    ];
    setNotifications(mockNotifications);
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const addNotification = useCallback((notification) => {
    setNotifications((prev) => [...prev, notification]);
  }, []);

  const value = {
    notifications,
    addNotification,
    fetchNotifications,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};