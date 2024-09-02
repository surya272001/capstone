import React from 'react';
import '../styles/Calendar.css'; // Create this CSS file for styling

const Calendar = () => {
  return (
    <div className="calendar-container">
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
        <header className="calendar-header">
          <h1>Calendar</h1>
        </header>
        <div className="calendar-widget">
          {/* Integrate your live calendar here */}
          <iframe
            title="Live Calendar"
            src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Your/Timezone"
            style={{ border: 0, width: '100%', height: '100vh' }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default Calendar;
