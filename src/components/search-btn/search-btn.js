import React, { useState } from 'react';
import classNames from 'classnames';

import './search-btn.css';

const SearchBtn = ({ onClickAll }) => {
  const [activeButton, setActiveButton] = useState({
    all: false,
    active: false,
    done: false,
  });

  const classAll = classNames('search-btn_btn btn_type_all', {
    ['search-btn_btn btn_type_all' + ' btn-active']: activeButton.all,
  });

  const classActive = classNames('search-btn_btn btn_type_active', {
    ['search-btn_btn btn_type_active' + ' btn-active']: activeButton.active,
  });

  const classDone = classNames('search-btn_btn btn-all_type_done', {
    ['search-btn_btn btn-all_type_done' + ' btn-active']: activeButton.done,
  });

  const onClickButtonAll = (e) => {
    setActiveButton({
      all: true,
      active: false,
      done: false,
    });

    onClickAll(e);
  };

  const onClickButtonActive = (e) => {
    setActiveButton({
      all: false,
      active: true,
      done: false,
    });

    onClickAll(e);
  };

  const onClickButtonDone = (e) => {
    setActiveButton({
      all: false,
      active: false,
      done: true,
    });

    onClickAll(e);
  };

  return (
    <div className='search-btn'>
      <button type='button' className={classAll} onClick={onClickButtonAll}>
        Все
      </button>
      <button
        type='button'
        className={classActive}
        onClick={onClickButtonActive}
      >
        Активные
      </button>
      <button type='button' className={classDone} onClick={onClickButtonDone}>
        Выполнено
      </button>
    </div>
  );
};

export default SearchBtn;
