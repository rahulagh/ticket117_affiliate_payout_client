import React from 'react';
import styled from 'styled-components';

const PayoutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const PayoutTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const PayoutInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const Value = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`;

const PayoutDetails = () => {
  // In a real application, you would fetch this data from an API
  const payoutData = {
    currentBalance: 1250.00,
    pendingEarnings: 500.00,
    lastPayout: 750.00,
    lastPayoutDate: '2024-08-15',
    nextPayoutDate: '2024-09-15',
  };

  return (
    <PayoutContainer>
      <PayoutTitle>Payout Details</PayoutTitle>
      <PayoutInfo>
        <InfoItem>
          <Label>Current Balance</Label>
          <Value>${payoutData.currentBalance.toFixed(2)}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Pending Earnings</Label>
          <Value>${payoutData.pendingEarnings.toFixed(2)}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Last Payout</Label>
          <Value>${payoutData.lastPayout.toFixed(2)}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Last Payout Date</Label>
          <Value>{payoutData.lastPayoutDate}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Next Payout Date</Label>
          <Value>{payoutData.nextPayoutDate}</Value>
        </InfoItem>
      </PayoutInfo>
    </PayoutContainer>
  );
};

export default PayoutDetails;