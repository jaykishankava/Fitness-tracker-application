import React, { createContext, useState, useEffect } from 'react';

// Create Workout Context
export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState(JSON.parse(localStorage.getItem('workouts')) || []);
  const [goals, setGoals] = useState(JSON.parse(localStorage.getItem('goals')) || { weeklyGoal: '', progress: 0 });
  
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [workouts, goals]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const setGoal = (goal) => {
    setGoals(goal);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, goals, addWorkout, setGoal }}>
      {children}
    </WorkoutContext.Provider>
  );
};
