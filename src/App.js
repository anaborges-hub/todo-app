import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './Components/AppContent';
import AppHeader from './Components/AppHeader';
import PageTitle from './Components/PageTitle';
import { Container, Wrapper } from './Styled/Container';
import globalStyle from './Styled/globalStyle';

function App() {
  return (
    <globalStyle>
      <Container>
        <PageTitle>TODO LIST</PageTitle>
        <Wrapper>
          <AppHeader />
          <AppContent />
        </Wrapper>
      </Container>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontsize: '1.4rem',
          },
        }}
      />
    </globalStyle>
  );
}

export default App;
