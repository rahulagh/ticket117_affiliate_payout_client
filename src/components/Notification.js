// Notification.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { NotificationContext } from '../contexts/NotificationContext';

const NotificationItem = styled.li`
  background-color: ${({ read, theme }) =>
    read ? theme.colors.background : theme.colors.highlightBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlightBackground};
  }
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const Message = styled.p`
  margin: 0 0 0.5rem 0;
`;

const Timestamp = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const Notification = ({ notification }) => {
  const { markAsRead } = useContext(NotificationContext);

  const handleClick = () => {
    if (!notification.read) {
      markAsRead(notification.id);
    }
  };

  return (
    <NotificationItem read={notification.read} onClick={handleClick}>
      <Title>{notification.title}</Title>
      <Message>{notification.message}</Message>
      <Timestamp>{new Date(notification.timestamp).toLocaleString()}</Timestamp>
    </NotificationItem>
  );
};

export default Notification;