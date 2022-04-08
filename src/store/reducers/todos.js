const initialState = { todo: [] };

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'addTodo':
      return { ...state, todo: action.payload };
    default:
      return state;
  }
}

export default todoReducer;
