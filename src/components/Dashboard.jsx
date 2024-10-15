import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import ActivityTypesChart from './ActivityTypesChart';
import WorkoutTrends from './WorkoutTrends';
import './Dashbord.css'
const Dashboard = () => {
  const { workouts, goals } = useContext(WorkoutContext);

  return (
    <>
      <div className="container">
        <h1 className='text-center border border-4 border-dark rounded-pill mt-3 mb-3'>Dashboard</h1>

        {/* Recent Workouts Card */}
        <div className="card mb-3">
          <div className="card-header text-white" style={{backgroundColor:"#224254"}}>
            <h3>Recent Workouts</h3>
          </div>
          <div className="card-body bg-secondary text-white">
            {workouts.slice(0, 5).map((workout, index) => (
              <div key={index} className="mb-2">
                <p>
                  <strong>{workout.activity}</strong> - {workout.duration} mins
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Goals Card */}
        <div className="card mb-3">
          <div className="card-header text-white" style={{backgroundColor:"#224254"}}>
            <h3>Weekly Goals</h3>
          </div>
          <div className="card-body bg-secondary text-white">
            <h3>{goals ? goals.weeklyGoal : 'No goals set'}</h3>
          </div>
        </div>

        {/* Charts Section */}
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="card">
              <div className="card-header text-white" style={{backgroundColor:"#224254"}}>
                <h3>Activity Types Breakdown</h3>
              </div>
              <div className="card-body bg-warning ">
                <ActivityTypesChart />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="card">
              <div className="card-header text-white" style={{backgroundColor:"#224254"}}>
                <h3>Workout Trends</h3>
              </div>
              <div className="card-body bg-warning ">
                <WorkoutTrends />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
