import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CourseDetail.css';

const CourseDetail = () => {
  const { courseId } = useParams();

  const courseData = {
    1: {
      title: "Mathematics",
      description: "Advanced mathematics topics covering algebra, calculus, and geometry.",
      videos: ["Algebra Basics", "Introduction to Calculus", "Geometry Essentials"],
    },
    2: {
      title: "Science",
      description: "Explore the world of physics, chemistry, and biology with in-depth tutorials.",
      videos: ["Physics Fundamentals", "Chemistry Reactions", "Biology 101"],
    },
    3: {
      title: "History",
      description: "Dive into historical events and figures that shaped the world.",
      videos: ["World War II", "The Renaissance", "Ancient Civilizations"],
    },
  };

  const course = courseData[courseId] || {};

  return (
    <div className="course-detail-container">
      <header className="course-header">
        <h1>{course.title}</h1>
        <p>{course.description}</p>
      </header>
      <div className="course-content">
        <h3>Related Videos</h3>
        <div className="videos-grid">
          {course.videos?.map((video, index) => (
            <div key={index} className="video-card">
              <h4>{video}</h4>
              <p>Watch this video to understand {video.toLowerCase()} better.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
