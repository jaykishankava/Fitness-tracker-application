Fitness Tracker Application
This project is a fitness tracker application built with React, featuring several components for user management and workout tracking. It includes login, signup, and a dashboard with visual charts displaying workout trends and activity types. The application uses Bootstrap for styling, React Context API for state management, Chart.js for data visualization, and React Toastify for notifications.

Features
User Authentication: Users can sign up, log in, and access personalized workout data.
Dashboard: Displays recent workouts, weekly goals, and two charts showing workout trends and activity breakdown by type.
Workout Logging: Allows users to log workout sessions, specifying activity type, duration, calories burned, and date.
Charts: Visual breakdown of workout trends and activity types using Pie and Line charts from Chart.js.
Components Overview
Login Component (Login.js):

Users can log in using an existing account.
Checks credentials from localStorage and displays error messages if credentials are invalid.
Upon successful login, it navigates to the dashboard.
Signup Component (Signup.js):

Users can create a new account by providing an email and password.
Checks for existing users and prevents duplicate account creation.
After a successful signup, users are redirected to the login page.
Activity Types Chart Component (ActivityTypesChart.js):

Displays a pie chart that breaks down workout data by activity type and total duration.
Uses Chart.js for rendering the pie chart and React Context for accessing workout data.
Workout Trends Chart Component (WorkoutTrends.js):

Displays a line chart showing the total duration of workouts over time.
Uses Chart.js to show trends over a given period (daily, weekly, or monthly).
Workout Log Component (WorkoutLog.js):

Users can log workout sessions by providing details like activity, duration, calories burned, and date.
The log is stored and updated in the WorkoutContext.
Dashboard Component (Dashboard.js):

Displays recent workouts, weekly goals, and two charts: a pie chart for activity types and a line chart for workout trends.
Pulls data from the context and formats it into visually accessible information.
State Management
The application uses React Context API for managing workout data across components.
The WorkoutContext provides functions to add workouts and access the logged workouts.
Libraries and Tools
React Router DOM: Handles navigation between pages (e.g., login, signup, dashboard).
Chart.js: Used for creating the interactive charts (Pie and Line charts).
React Toastify: Displays notifications for user actions like login success, errors, and workout logging.
Bootstrap: Provides responsive UI components and design.
Future Improvements
Add more detailed workout tracking (e.g., intensity, location, etc.).
Implement secure authentication and backend integration for user management and data storage.
Add features to edit and delete logged workouts.