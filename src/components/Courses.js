import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Courses.css';

const Courses = () => {
  const courses = [
    { id: 1, title: "Mathematics", description: "Algebra, Calculus, Geometry" },
    { id: 2, title: "Science", description: "Physics, Chemistry, Biology" },
    { id: 3, title: "History", description: "World History, Ancient Civilizations" },
    { id: 4, title: "English", description: "Literature, Grammar, Composition" },
    { id: 5, title: "Art", description: "Painting, Sculpture, Art History" },
    { id: 6, title: "Computer Science", description: "Programming, Algorithms, Data Structures" },
  ];

  return (
    <div className="courses-container">
      <header className="courses-header">
        <h1>Available Courses</h1>
        <p>Select a course to explore more.</p>
      </header>
      <div className="courses-grid">
        {courses.map(course => (
          <Link to={`/courses/${course.id}`} key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
