import React from 'react';
import { Toaster } from 'react-hot-toast';
import Container from './Components/Container/Container';
import PageTitle from './Components/PageTitle/PageTitle';
import { GlobalStyle } from './Styled/globalStyle';
import Wrapper from './Components/AppWrapper/AppWrapper';
import AppHeader from './Components/AppHeader/AppHeader';
import AppContent from './Components/AppContent/AppContent';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container />
      <PageTitle>TODO LIST</PageTitle>
      <Wrapper>
        <AppHeader />
        <AppContent />
      </Wrapper>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontsize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
