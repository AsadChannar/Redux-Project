// taskReducer.js

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter((task, index) => index !== action.payload);
    case 'UPDATE_TASK':
      return state.map((task, index) =>
        index === action.payload.index ? { ...task, ...action.payload.updatedTask } : task
      );
    default:
      return state;
  }
};

export default taskReducer;
