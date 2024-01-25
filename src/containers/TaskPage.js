import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TaskPage = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskPage;
