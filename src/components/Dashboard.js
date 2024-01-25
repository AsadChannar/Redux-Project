// Dashboard.js

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/taskActions';
import Swal from 'sweetalert2';

const Dashboard = ({ totalTasks, tasks, fetchTasks }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchTasks();
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchTasks]);

  if (loading) {
    Swal.fire({
      title: 'Loading',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    return null;
  }

  return (
    <div className='col-6 offset-3'>
      <div className='text-center'>
        <h2 className='text-success'>Dashboard</h2>
        <p>Total Tasks: {totalTasks}</p>
      </div>

      {tasks.length > 0 && (
        <ul className='list-unstyled shadow rounded'>
          {tasks.map((task, index) => (
            <li key={index} className='ps-4 py-1'>
              <div>
                <p className='m-0 fs-5 '>{`${index + 1}. ${task.title}`}</p>
              </div>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalTasks: state.tasks.length,
  tasks: state.tasks,
});

const mapDispatchToProps = {
  fetchTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
