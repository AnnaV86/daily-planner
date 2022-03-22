import React from 'react';

import './app-header.css';

const AppHeader = ({ todos }) => {
  const todosDone = todos.filter((todo) => todo.done).length;

  return (
    <div className='app-header'>
      <h1 className='app-header__header'>Мой ежедневник</h1>
      <h2 className='app-header__ready'>
        Выполнено {todosDone}, осталось выполнить {todos.length - todosDone}
      </h2>
    </div>
  );
};

export default AppHeader;
