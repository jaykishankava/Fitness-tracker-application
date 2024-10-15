import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Signup = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const existingUser = users.find((u) => u.email === user.email);
    if (existingUser) {
      toast.error('Email already exists!');
      return;
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    toast.success('Signup successful!');
    navigate('/login');
  };

  return (
    <div className="container mt-5">
     
      <form onSubmit={handleSignup} className="col-md-6 offset-md-3 border border-2 border-dark p-3 text-white rounded" style={{backgroundColor:'#224254'}}>
      <h2 className="text-center mb-4">Sign Up</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" placeholder="Enter your email" value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" placeholder="Enter your password"value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required/>
        </div>
        <button type="submit" className="btn btn-success w-100">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
