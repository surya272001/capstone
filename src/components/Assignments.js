// src/components/Assignments.js

import React, { useState } from 'react';
import '../styles/Assignments.css';

const Assignments = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Handle file upload
      console.log('File submitted:', file);
      // You can add the code to upload the file to the server here
    }
  };

  return (
    <div className="assignments">
      <h2>Submit Assignment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Submit Assignment</button>
      </form>
    </div>
  );
};

export default Assignments;
