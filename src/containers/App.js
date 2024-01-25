import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskPage from './TaskPage';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path="/" element={<TaskPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
