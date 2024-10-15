import React, { useState, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import { toast } from 'react-toastify';

const WorkoutLog = () => {
  const [workout, setWorkout] = useState({ activity: '', duration: '', calories: '', date: '' });
  const { addWorkout } = useContext(WorkoutContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout(workout);
    toast.success('Workout added successfully!');
    setWorkout({ activity: '', duration: '', calories: '', date: '' });
  };

  return (
    <div className="container mt-4">
      
      <form onSubmit={handleSubmit} className="needs-validation border rounded p-3 bg-secondary text-white" noValidate>
      <h3>Log Your Workout</h3>
        <div className="mb-3">
          <label htmlFor="activity" className="form-label">Activity</label>
          <input
            type="text"
            className="form-control"
            id="activity"
            placeholder="e.g., Running, Cycling"
            value={workout.activity}
            onChange={(e) => setWorkout({ ...workout, activity: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration (minutes)</label>
          <input
            type="number"
            className="form-control"
            id="duration"
            placeholder="Duration in minutes"
            value={workout.duration}
            onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="calories" className="form-label">Calories Burned</label>
          <input
            type="number"
            className="form-control"
            id="calories"
            placeholder="Calories burned"
            value={workout.calories}
            onChange={(e) => setWorkout({ ...workout, calories: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={workout.date}
            onChange={(e) => setWorkout({ ...workout, date: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Log Workout</button>
      </form>
    </div>
  );
};

export default WorkoutLog;
