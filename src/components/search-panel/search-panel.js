import React, { useState } from 'react';

import SearchBtn from '../search-btn/search-btn';

import './search-panel.css';

const SearchPanel = ({ onClickAll, onFilterTodo }) => {
  return (
    <div className='search-panel'>
      <input
        className='search-panel__input'
        type='text'
        placeholder='Поиск'
        onChange={onFilterTodo}
      />
      <SearchBtn onClickAll={onClickAll} />
    </div>
  );
};

export default SearchPanel;
