import React from 'react';
import './css/home.css';

import HomeCards from './HomeCards';
import FAQS from './FAQS';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-md-6 mt-5">
          <h1 className="main-heading mt-5">Master Tech Skills with <span className="brand-text">CodeCampusOnline</span></h1>
          <p className="lead">
            Embark on your tech journey with our industry-leading courses. Learn from experts and build practical skills in web development, programming, and database management.
          </p>
          <ul className="feature-list">
            <li>✅ Comprehensive curriculum designed by industry experts</li>
            <li>✅ Practical projects and real-world applications</li>
            <li>✅ Flexible learning schedule with dedicated support</li>
            <li>✅ Free resources and AI tools to enhance your skillset</li>
          </ul>
        </div>

        {/* Image Content */}
        <div className="col-md-6 text-center">
          <img src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?semt=ais_hybrid&w=740" alt="Tech Skills" className="animated-img img-fluid" width={"100%"} />
        </div>
      </div>
      <HomeCards/>
      <FAQS/>
    </div>
  );
};

export default Home;
