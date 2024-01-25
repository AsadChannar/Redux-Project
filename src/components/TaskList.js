import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from '../actions/taskActions';
import Swal from 'sweetalert2';
import './TaskList.css';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  const handleDelete = (index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this task!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(index);
        Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your task is safe :)', 'info');
      }
    });
  };

  const handleUpdate = (index) => {
    Swal.fire({
      title: 'Update Task',
      input: 'text',
      inputLabel: 'New task title',
      inputValue: tasks[index].title,
      showCancelButton: true,
      confirmButtonText: 'Update',
      cancelButtonText: 'Cancel',
      allowOutsideClick: false,
      inputValidator: (value) => {
        if (!value) {
          return 'Please enter a new task title!';
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Update the task using your updateTask action
        updateTask(index, { title: result.value });
      }
    });
  };

  return (
    <div className='col-6 offset-3'>
      <h2 className='text-success text-center'>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul className='list-unstyled shadow rounded'>
          {tasks.map((task, index) => (
            <li key={index} className='d-flex justify-content-between gap-3 px-3 py-2'>
              <div>
                <p className='m-0 fs-5'>{`${index + 1}. ${task.title}`}</p>
              </div>
              <div className='d-flex gap-3'>
                <button onClick={() => handleUpdate(index)} className='btn btn-outline-warning'>Update</button>
                <button onClick={() => handleDelete(index)} className='btn btn-outline-danger'>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>

  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  deleteTask,
  updateTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
