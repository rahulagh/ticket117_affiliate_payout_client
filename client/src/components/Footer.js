// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 2rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Affiliate Payout System. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;