// src/components/NotificationList.js
import React from 'react';
import styled from 'styled-components';
import Notification from './Notification';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NotificationList = ({ notifications }) => {
  return (
    <List>
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </List>
  );
};

export default NotificationList;