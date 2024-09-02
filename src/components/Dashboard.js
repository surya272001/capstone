import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || "User";

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens or user data)
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>My Dashboard</h2>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/assignments">Assignments</Link></li>
            <li><Link to="/attendance">Attendance</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome, {username}</h1>
        </header>
        <div className="dashboard-widgets">
          <div className="widget">
            <h3>Announcements</h3>
            <p>Stay updated with the latest news and updates.</p>
          </div>
          <div className="widget">
            <h3>Leaderboard</h3>
            <p>See how you're doing compared to others.</p>
          </div>
          <div className="widget">
            <h3>Completion Progress</h3>
            <p>Track your course completion progress.</p>
          </div>
          <div className="widget">
            <h3>Assignments</h3>
            <p>View your upcoming assignments.</p>
          </div>
          <div className="widget">
            <h3>Schedule</h3>
            <p>Check your daily schedule.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
