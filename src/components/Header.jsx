import React from "react";
import { Link } from "react-router-dom";
import "../pages/css/header.css";

const Header = () => {
  const navItem = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Course", path: "/courses" },
    { id: 3, name: "Class Timings", path: "/timings" },
    // { id: 4, name: "Trainers", path: "/trainers" },
    { id: 5, name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        📢 Our new course launches on <strong>June 1st, 2025</strong>!
      </div>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg mb-4 bg-body-tertiary fixed-top custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            codecampuseonline
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {navItem.map((ele) => (
              <ul key={ele.id} className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to={ele.path}>
                    {ele.name}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
