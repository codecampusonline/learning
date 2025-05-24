import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/blogs.css'
import { Link } from "react-router-dom";
const courseData = [

  {
    id: 1,
    courseName: "Core Java",
    duration: "45 - 50 Days",
    path:'/courses'
  },
  {
    id: 2,
    courseName: "Web Technology",
    duration: "40 - 45 Days",
    path:'/courses'
  },
  {
    id: 3,
    courseName: "React JS",
    duration: "40 - 45 Days",
    path:'/courses'
  },
];

const Blogs = () => {
  return (
    <div className="container py-5" style={{ marginTop: "100px" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-sm-12 col-lg-12 mb-4">
          <div className="card shadow-lg p-4 bg-light">
            <h3 className="text-success mb-4 text-center">Class Timings</h3>
            <div className="d-flex justify-content-between mb-4">
              <div>
                <h5 className="text-dark fw-bold">Morning Batch:</h5>
                <p className="mb-1">6:00 AM - 9:30 AM</p>
              </div>
              <div>
                <h5 className="text-dark fw-bold">Evening Batch:</h5>
                <p className="mb-1">8:00 PM - 10:00 PM</p>
              </div>
            </div>

            <h4 className="text-danger mb-3 text-center">Course Durations</h4>
            <div className="row">
              {courseData.map((course) => (
                <div key={course.id} className="col-12 col-md-4 mb-3">
                  <div className="card h-100 shadow-sm text-center p-3 border-0">
                    <Link to={course.path} id="course-timings-link">
                    <h5 className="text-primary fw-bold">{course.courseName}</h5>
                    <p className="text-muted mb-0 fw-bold">{course.duration}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
