import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#224254"}}>
      <div className="container-fluid">
        <h1 className=' text-white'>      FitnessApp        </h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {loggedInUser && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/log-workout">Log Workout</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/set-goal">Set Goal</Link>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav">
            {!loggedInUser ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Sign Up</Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-outline-warning btn-danger" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

{/* <li className="nav-item">
//     <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
//   </li> */}