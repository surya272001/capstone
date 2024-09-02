import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StartPage.css';

const StartPage = () => {
  const navigate = useNavigate();

  const handleStudentLogin = () => {
    navigate('/student-login');
  };

  const handleTeacherLogin = () => {
    navigate('/teacher-login');
  };

  return (
    <div className="start-page-container">
      <h1>Welcome to the Learning Management System</h1>
      <div className="buttons-container">
        <button className="start-button" onClick={handleStudentLogin}>Student Login</button>
        <button className="start-button" onClick={handleTeacherLogin}>Teacher Login</button>
      </div>
    </div>
  );
};

export default StartPage;
