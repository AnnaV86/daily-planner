const initialState = { todo: [] };

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'addTodo':
      return { ...state, todo: action.payload };
    case 'deleteTodo':
      return {
        ...state,
        todo: state.todo.filter((el) => el.id !== action.payload),
      };
    case 'importantTodo':
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload.id ? action.payload.newTodo : el
        ),
      };
    case 'doneTodo':
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload.id ? action.payload.newTodo : el
        ),
      };
    case 'editTodo':
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload.id ? action.payload.todo : el
        ),
      };
    default:
      return state;
  }
}

export default todoReducer;
