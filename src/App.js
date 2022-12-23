import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './Components/AppContent';
import AppHeader from './Components/AppHeader';
import PageTitle from './Components/PageTitle';
import { Container } from './Styled/Container';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <>
      <Container>
        <PageTitle>TODO LIST</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </Container>
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
