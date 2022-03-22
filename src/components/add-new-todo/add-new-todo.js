import React, { useState } from 'react';

import './add-new-todo.css';

const AddNewTodo = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  const onClickAddTodo = () => {
    addTodo(value);
    setValue('');
  };

  return (
    <div className='new-todo'>
      <input
        className='new-todo__input'
        type='text'
        placeholder='Новая задача'
        value={value}
        onChange={onChangeValue}
      />
      <button className='new-todo__btn' type='button' onClick={onClickAddTodo}>
        Добавить
      </button>
    </div>
  );
};

export default AddNewTodo;
