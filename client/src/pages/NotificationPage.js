// src/pages/NotificationPage.js
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { NotificationContext } from '../contexts/NotificationContext';
import NotificationList from '../components/NotificationList';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const FilterContainer = styled.div`
  margin-bottom: 1rem;
`;

const FilterButton = styled.button`
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.background};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PageButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.background};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
`;

const NotificationsPage = () => {
  const { notifications, fetchNotifications, totalPages, currentPage } = useContext(NotificationContext);
  const [filter, setFilter] = React.useState('all');

  useEffect(() => {
    fetchNotifications(currentPage)
  }, [currentPage, fetchNotifications])
  

  const filteredNotifications = React.useMemo(() => {
    if (filter === 'all') return notifications;
    return notifications.filter((notification) => notification.type === filter);
  }, [notifications, filter]);


  const handlePageChange = (newPage) => {
    fetchNotifications(newPage)
  }


  return (
    <PageContainer>
      <Title>Notifications</Title>
      <FilterContainer>
        <FilterButton
          active={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          All
        </FilterButton>
        <FilterButton
          active={filter === 'payment'}
          onClick={() => setFilter('payment')}
        >
          Payment
        </FilterButton>
        <FilterButton
          active={filter === 'product'}
          onClick={() => setFilter('product')}
        >
          Product Updates
        </FilterButton>
        <FilterButton
          active={filter === 'commission'}
          onClick={() => setFilter('commission')}
        >
          Commission Changes
        </FilterButton>
      </FilterContainer>

      <NotificationList notifications={filteredNotifications} />
      <PaginationContainer>
        {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
          <PageButton
          key={page}
          active={page === currentPage}
          onClick={() => handlePageChange(page)}
          >{page}</PageButton>
        ))}
      </PaginationContainer>
    </PageContainer>
  );
};

export default NotificationsPage;