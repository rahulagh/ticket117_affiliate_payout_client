// src/contexts/NotificationContext.js
import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from "axios"

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchNotifications = useCallback(async (page = 1, limit = 10) => {
    // Simulating API call
    try {
      const userId = localStorage.getItem("userId") // Assume we store userId in local Storage
      console.log(userId)
      const response = await axios.get(`/api/notifications`, {
        params: {userId, page, limit}
      })
      const {notificationsList, totalItems, totalPages, currentPage} = response.data
      setNotifications(notificationsList)
      setTotalItems(totalItems)
      setTotalPages(totalPages)
      setCurrentPage(currentPage)

    }catch(error){
      console.error("Error while fetching notifications",error)
    }


    // const mockNotifications = [
    //   { id: 1, message: 'New payout available', type: 'payment' },
    //   { id: 2, message: 'Product update: Commission increased', type: 'product' },
    // ];
    // setNotifications(mockNotifications);
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
    totalItems,
    totalPages,
    currentPage,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};