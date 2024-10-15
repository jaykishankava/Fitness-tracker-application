import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { WorkoutContext } from '../context/WorkoutContext';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ActivityTypesChart = () => {
  const { workouts } = useContext(WorkoutContext);

  // Group workouts by activity type
  const activityData = workouts.reduce((acc, workout) => {
    const activity = workout.activity;
    if (!acc[activity]) acc[activity] = 0;
    acc[activity] += parseInt(workout.duration); // Sum durations by activity type
    return acc;
  }, {});

  const labels = Object.keys(activityData);
  const data = Object.values(activityData);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Activity Duration (mins)',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <h5>Activity Types (Duration Breakdown)</h5>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default ActivityTypesChart;
