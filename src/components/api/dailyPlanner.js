/**
 * Запрашивает текущие заметки
 */
export const getTodoFetch = async () => {
  const response = await fetch(`http://localhost:3010/dailyPlanner/`);
  const result = await response.json();
  return result;
};

/**
 * Обрабатывает заметки
 *
 * @param todo  объект заметки
 * @param  id
 *
 * */
export const updateTodoFetch = async (todo, id) => {
  const response = await fetch(`http://localhost:3010/dailyPlanner/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(todo),
  });
  const result = await response.json();

  return result;
};

/**
 * Удаление заметки
 * @param id
 */
export const deleteTodoFetch = async (id) => {
  const response = await fetch(`http://localhost:3010/dailyPlanner/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};

/**
 * Добавление заметки
 * @param todo заметка
 */
export const addTodoFetch = async (todo) => {
  const response = await fetch(`http://localhost:3010/dailyPlanner/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(todo),
  });
  const result = await response.json();
  return result;
};
