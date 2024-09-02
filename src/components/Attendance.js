import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Attendance.css'; // Ensure this CSS file is created

const Attendance = () => {
  const [date, setDate] = useState(new Date());
  
  // Sample attendance data
  const attendanceData = {
    '2024-08-30': 'Absent',
    '2024-08-31': 'Present',
    '2024-09-01': 'Absent',
    '2024-09-02': 'Present',
  };

  // Format date to string
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Determine if the selected date is present or absent
  const getDayStatus = (date) => {
    const dateString = formatDate(date);
    return attendanceData[dateString] || 'No data';
  };

  return (
    <div className="attendance-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>My Dashboard</h2>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="/dashboard">Home</a></li>
            <li><a href="/calendar">Calendar</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/assignments">Assignments</a></li>
            <li><a href="/attendance">Attendance</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="attendance-header">
          <h1>Attendance</h1>
        </header>
        <div className="attendance-widget">
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={({ date, view }) => view === 'month' && (
              <div className={`attendance-status ${getDayStatus(date)}`}>
                {getDayStatus(date)}
              </div>
            )}
          />
        </div>
      </main>
    </div>
  );
};

export default Attendance;
