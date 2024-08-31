import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { NotificationProvider } from './contexts/NotificationContext';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotificationsPage from './pages/NotificationPage';
import ProfilePage from './pages/ProfilePage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NotificationProvider>
        <Router>
          <AppContainer>
            <Header />
            <MainContent>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </MainContent>
            <Footer />
          </AppContainer>
        </Router>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;