import React, { useState } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AddNewTodo from '../add-new-todo/add-new-todo';
import { nanoid } from 'nanoid';

import './app.css';

const todoData = [
  { id: 1, label: 'Умыться', important: false, done: false },
  { id: 2, label: 'Позавтракать', important: false, done: false },
  { id: 3, label: 'Одеться', important: false, done: false },
];

export const App = () => {
  const [todos, setTodo] = useState(todoData);
  const [showList, setShowList] = useState(todos);

  const onDeleteTodo = (id) => {
    setTodo((prev) => prev.filter((el) => el.id !== id));
    setShowList((prev) => prev.filter((el) => el.id !== id));
  };

  const onImportantTodo = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
    setShowList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
  };

  const onDoneTodo = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
    setShowList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const addTodo = (label) => {
    setTodo((prevTodos) =>
      prevTodos.concat({ id: nanoid(), label, important: false, done: false })
    );
    setShowList((prevTodos) =>
      prevTodos.concat({ id: nanoid(), label, important: false, done: false })
    );
  };

  const onFilterTodo = ({ target: { value } }) => {
    console.log(value);
    setShowList(
      todos.filter(
        (el) => el.label.toLowerCase().indexOf(value.toLowerCase()) > -1
      )
    );
  };

  const onClickAll = (e) => {
    const filter = e.target.innerText;
    switch (filter) {
      case 'Активные':
        setShowList(todos.filter((todo) => !todo.done));
        break;
      case 'Выполнено':
        setShowList(todos.filter((todo) => todo.done));
        break;
      default:
        setShowList(todos);
    }
  };

  return (
    <div>
      <AppHeader />
      <SearchPanel onFilterTodo={onFilterTodo} onClickAll={onClickAll} />
      <TodoList
        todos={showList}
        onDeleteTodo={onDeleteTodo}
        onImportantTodo={onImportantTodo}
        onDoneTodo={onDoneTodo}
      />
      <AddNewTodo addTodo={addTodo} />
    </div>
  );
};
