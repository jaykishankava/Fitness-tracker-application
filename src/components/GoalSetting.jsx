import React, { useState, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import { toast } from 'react-toastify';

const GoalSetting = () => {
  const [goal, setGoal] = useState('');
  const { setGoal: saveGoal } = useContext(WorkoutContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveGoal({ weeklyGoal: goal });
    toast.success('Weekly goal set successfully!');
    setGoal('');
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="needs-validation bg-secondary text-white border rounded p-3" noValidate>
      <h3>Set Your Weekly Goal</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your weekly goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Set Goal</button>
      </form>
    </div>
  );
};

export default GoalSetting;
