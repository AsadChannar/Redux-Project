export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});


export const deleteTask = (index) => {
  return {
    type: 'DELETE_TASK',
    payload: index,
  };
};

export const updateTask = (index, updatedTask) => {
  return {
    type: 'UPDATE_TASK',
    payload: { index, updatedTask },
  };
}
// taskActions.js

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      // Simulating a delay to mimic an asynchronous operation
      // In a real-world scenario, you would replace this with an actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Assume tasks are stored in some local variable or imported from another file
      const tasks = [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
        // ... add more tasks as needed
      ];

      dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: tasks });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  };
};
