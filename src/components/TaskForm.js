import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (title.trim() !== '') {
      console.log('Adding Task:', { title });
      addTask({ title });
      setTitle('');
    }
  };

  return (
    <div className='text-center '>
      <div>
        <h2 className='text-success'>Add Task</h2>
      </div>
      <div className='offset-3 col-6 '>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='form-control'
        />
        <button onClick={handleAddTask} className='my-3 btn btn-outline-success'>Add Task</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
