import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard';
import WorkoutLog from './components/WorkoutLog';
import GoalSetting from './components/GoalSetting';
import { WorkoutProvider } from './context/WorkoutContext';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
const App = () => {
  return (
    <WorkoutProvider>
      <Router>
        <Header /> {/* Include the Header here */}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/log-workout" element={<WorkoutLog />} />
          <Route path="/set-goal" element={<GoalSetting />} />
        </Routes>
      </Router>
      <ToastContainer />
    </WorkoutProvider>
  );
};

export default App;
