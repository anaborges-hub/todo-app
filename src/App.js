import React from 'react';
import AppHeader from './Components/AppHeader';
import PageTitle from './Components/PageTitle';
import style from './styles/modules/app.module.scss';

function App() {
  return (
    <div className="container">
      <PageTitle>TODO LIST</PageTitle>
      <div className={style.app__wrapper}>
        <AppHeader />
      </div>
    </div>
  );
}

export default App;
