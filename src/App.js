import React from 'react';
import { Toaster } from 'react-hot-toast';
// import AppContent from './Components/AppContent';
// import AppHeader from './Components/AppHeader';
// import PageTitle from './Components/PageTitle/PageTitle';
// import { Container, Wrapper } from './Styled/Container';
import Container from './Components/Container/Container';
import PageTitle from './Components/PageTitle/PageTitle';
import { GlobalStyle } from './Styled/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container />
      <PageTitle>TODO LIST</PageTitle>
      {/* <Wrapper>
          <AppHeader />
          <AppContent />
        </Wrapper> */}
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
