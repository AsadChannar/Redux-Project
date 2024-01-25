// src/reducers/index.js
import { combineReducers } from 'redux';
import tasksReducer from './tasks';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  // Add more reducers as needed
});

export default rootReducer;
