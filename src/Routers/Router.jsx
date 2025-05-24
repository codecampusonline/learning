import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import Courses from '../pages/Courses';
// import Trainers from '../pages/Trainers';
import Footer from '../components/Footer';

const Router = () => {
  return (
    <BrowserRouter basename="/learning">
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Router;

// Separate component to use hooks inside <BrowserRouter>
const AppRoutes = () => {
  const location = useLocation();

  const isErrorPage =
    location.pathname !== '/' &&
    location.pathname !== '/courses' &&
    location.pathname !== '/timings' &&
    location.pathname !== '/contact-us';

  return (
    <>
      {!isErrorPage && <Header />}
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/timings" element={<Blogs />} />
        <Route path="/contact-us" element={<Contact />} />
        {/* <Route path="/trainers" element={<Trainers />} /> */}
        <Route path="*" element={<ErrorHandling />} />
      </Routes>
      {!isErrorPage && <Footer />}
    </>
  );
};

// 404 Component
function ErrorHandling() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.text}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
  },
  link: {
    marginTop: '20px',
    display: 'inline-block',
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'underline',
  },
};
