import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';

const SignUp = () => {
  const [organization, setOrganization] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Perform sign-up logic here

    navigate('/dashboard', { state: { email } }); // Redirect to dashboard after sign-up
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-form-container">
          <h2 className="signup-header">Create Your Account</h2>
          <form onSubmit={handleSignUp} className="signup-form">
            <div className="input-group">
              <label htmlFor="organization">Organization</label>
              <input
                type="text"
                id="organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                required
                placeholder="Enter your organization"
              />
            </div>
            <div className="input-group">
              <label htmlFor="course">Course</label>
              <input
                type="text"
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
                placeholder="Enter your course"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Teacher Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Create a password"
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Re-enter Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Re-enter your password"
              />
            </div>
            <button type="submit" className="signup-button">Create Account</button>
          </form>
          <div className="signup-footer">
            <p>Already have an account? <a href="/">Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
