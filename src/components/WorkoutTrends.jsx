import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { WorkoutContext } from '../context/WorkoutContext';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const WorkoutTrends = () => {
  const { workouts } = useContext(WorkoutContext);

  // Group workouts by date (or week/month)
  const workoutData = workouts.reduce((acc, workout) => {
    const date = new Date(workout.date).toLocaleDateString(); // Group by date
    if (!acc[date]) acc[date] = 0;
    acc[date] += parseInt(workout.duration); // Sum workout durations
    return acc;
  }, {});

  const labels = Object.keys(workoutData);
  const data = Object.values(workoutData);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Workout Duration (mins)',
        data: data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Duration (minutes)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <h3>Workout Trends (Weekly/Monthly)</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default WorkoutTrends;
