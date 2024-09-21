import React from 'react';
import styled from 'styled-components';
import PayoutDetails from '../components/PayoutDetails';
import NotificationList from '../components/NotificationList';
import ProductUpdate from '../components/ProductUpdate';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

const MainContent = styled.div``;

const Sidebar = styled.div``;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const HomePage = () => {
  // In a real application, you would fetch this data from an API
  const recentNotifications = [
    {
      id: 1,
      type: 'payment',
      title: 'Recent Payout',
      message: 'Your latest payout of $750 has been processed.',
      timestamp: new Date('2024-08-30T10:00:00Z').toISOString(),
      read: false,
    },
    {
      id: 2,
      type: 'product',
      title: 'New Product Available',
      message: 'Check out our latest product addition!',
      timestamp: new Date('2024-08-29T14:30:00Z').toISOString(),
      read: false,
    },
  ];

  return (
    <DashboardContainer>
      <MainContent>
        <SectionTitle>Payout Summary</SectionTitle>
        <PayoutDetails />
        <SectionTitle>Recent Notifications</SectionTitle>
        <NotificationList notifications={recentNotifications} />
      </MainContent>
      <Sidebar>
        <SectionTitle>Product Updates</SectionTitle>
        <ProductUpdate />
      </Sidebar>
    </DashboardContainer>
  );
};

export default HomePage;