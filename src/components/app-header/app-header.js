import React from 'react';

import './app-header.css';

const AppHeader = () => {
  return (
    <div className='app-header'>
      <h1 className='app-header__header'>Мой ежедневник</h1>
      <h2 className='app-header__ready'>
        Выполнено {1}, осталось выполнить {3}
      </h2>
    </div>
  );
};

export default AppHeader;
