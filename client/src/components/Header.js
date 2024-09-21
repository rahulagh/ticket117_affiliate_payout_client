import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Affiliate Dashboard</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/notifications">Notifications</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;