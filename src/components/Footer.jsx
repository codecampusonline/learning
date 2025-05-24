import React from 'react';
import '../pages/css/footer.css'; // Optional for extra styling
import { Link } from 'react-router-dom';
const Footer = () => {
    const navItem=[
        {
            id:1,
            name:"Home",
            path:"/"
        },
        {
            id:2,
            name:"Courses",
            path:"/courses"
        },{
            id:3,
            name:"Class Timings",
            path:"/timings"
        },
        // {
        //     id:4,
        //     name:"Trainers",
        //     path:"/trainers"
        // }
        ,{
            id:5,
            name:"Contact Us",
            path:"/contact-us"
        }
    ]
    const courseItems=[
        {
            id:"1",
            name:"Web Technology"
        },
        {
            id:"2",
            name:"React JS"
        },{
            id:"3",
            name:"Core Java"
        },{
            // id:"4",
            // name:"SQL"
        },
        {
            id:"5",
            name:"AI Tools  (Free)"
        }
    ]
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 w-100">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-12 col-md-4 mb-1">
            <h5 className="text-warning fw-bold">CodeCampusOnline</h5>
            <p>Your pathway to tech excellence. We provide high-quality training in web development, programming, and database technologies.</p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2 mb-1">
            <h6 className="text-uppercase fw-bold">Quick Links</h6>
            {
                navItem.map((ele)=>{
                    return <ul key={ele.id} className="list-unstyled">
                        <li><Link to={ele.path} className="text-light text-decoration-none">{ele.name}</Link></li>
                    </ul>
                })
            }
          </div>

          {/* Courses */}
          <div className="col-6 col-md-2 mb-1">
            <h6 className="text-uppercase fw-bold">Our Courses</h6>
           {courseItems.map((ele)=>{
            return <ul key={ele.id} className="list-unstyled">
                <li className="text-light text-decoration-none">{ele.name}</li>
            </ul>
           })}
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4 mb-1">
            <h6 className="text-uppercase fw-bold">Contact Us</h6>
            <p>5th cross pr Ayapa layout Marathahalli<br /> Bangalore, India - 560037</p>
            <p>📞 +91 701921 4982</p>
            <p>✉️ onlinecodecampus@gmail.com</p>
          </div>

        </div>
        <hr className="bg-secondary" />
        <p className="text-center mb-0">© {new Date().getFullYear()} CodeCampusOnline. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
