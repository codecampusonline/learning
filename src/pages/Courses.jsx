import React from "react";

const Courses = () => {
  const cardItems = [
    {
      id: 1,
      courseName: "Core Java",
      description:
        "Comprehensive training in Java programming fundamentals, object-oriented concepts,Exception Handlings, Strings, Arrays, Number Program, Pattern programs.",
      point1: "Java syntax and fundamentals",
      point2: "Object-oriented programming concepts",
      point3: "Number and Pattern programs",
      point4: "String and Array Programs",
      point5: "Exception handling and multithreading",
      image: "./images/CoreJava.png",
      stickPrice:"5999",
      price: "Rs.4499",
      duration: "45 - 50days",
      docs: "./docs/CodeCampSyllabusCoreJava.docx",
    },
    {
      id: 2,
      courseName: "React.js",
      description:
        "Learn component-based architecture, hooks, routing and state management with React.",
      point1: "React fundamentals and component architecture",
      point2: "State management with hooks and context API",
      point3: "Hooks and Lifecycle",
      point4: "Routing and Redux",
      point5: "React Router for navigation",
      image: "./images/Reactjs.jpeg",
      price: "Rs.3699",
      stickPrice:"4999",
      duration: "40 - 45days",
      docs: "./docs/CodeCampSyllabusReactjs.docx",
    },
    {
      id: 3,
      courseName: "Web Technology",
      description:
        "Master HTML, CSS, JavaScript, and Bootstrap to build responsive and interactive websites from scratch.",
      point1: "HTML5 structure and semantics",
      point2: "CSS3 styling and animations",
      point3: "JavaScript fundamentals and DOM manipulation",
      point4: "Boostrap Library",
      point5: "React Router for navigation",
      image: "./images/WebTech.webp",
      stickPrice:"4999",
      price: "Rs.3699",
      duration: "40 - 45days",
      docs: "./docs/CodeCampSyllabusWebTech.docx",
    },
    {
      id: 4,
      courseName: "AI Tools",
      description:
        "This course is currently under development and will soon offer comprehensive training on the latest AI tools and platforms for productivity and development.",
      point1: "AI Tools.",
      point2: "Hands-on with ChatGPT, Gemini, Copilot, etc.",
      point3: "Automating workflows using AI tools",
      point4: "Productivity hacks with AI",
      point5: "Integrating AI into your daily tasks",
      image: "./images/ai-developer.jpg",
      stickPrice:"1999",
      price: "free", // keep this for logic; we will override how it's displayed
      duration: "1 week",
      docs: "",
    },
  ];
  const upcomingCourses = [
    "C",
    "C++",
    "Python",
    "Data Science",
    "DevOps",
    "Many More",
  ];
  // SVG Icon (Red)
  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="me-2"
      style={{ marginTop: "-2px" }}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );

  return (
    <>
      <div className="row p-4 mt-5">
        {cardItems.map((course) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={course.id}>
            <div className="card shadow" style={{ width: "100%" }}>
              <img
                src={course.image}
                className="card-img-top"
                alt={course.courseName}
                width="100px"
                height="200px"
              />
              <div className="card-body">
                <h4 className="card-title fw-bold">{course.courseName}</h4>
                <p className="card-text">{course.description}</p>
                <ul className="list-unstyled">
                  <li>
                    <CheckIcon />
                    {course.point1}
                  </li>
                  <li>
                    <CheckIcon />
                    {course.point2}
                  </li>
                  <li>
                    <CheckIcon />
                    {course.point3}
                  </li>
                  <li>
                    <CheckIcon />
                    {course.point4}
                  </li>
                  <li>
                    <CheckIcon />
                    {course.point5}
                  </li>
                  <li style={{ color: "black", fontSize: "18px" }}>More</li>
                  {/* <li><a href={course.docs}>download</a></li> */}
                  {course.courseName !== "AI Tools" && (
                    <li>
                      <a href={course.docs}>download</a>
                    </li>
                  )}
                </ul>
                <div className="d-flex justify-content-between mt-3">
                  <p>
                    Duration <br />
                    <span className="text-dark fw-bold mb-0">
                      {course.duration}
                    </span>
                  </p>
                  <p>
                    Price <br />
                    <span className="text-danger mb-0">
                    <s>{course.stickPrice}</s>
                    <span className="text-success fw-bold"> {course.price}</span>
                    </span>
                    {/* {course.courseName === "AI Tools" ? (
                      <span className="text-danger mb-0">
                        <s>{course.price}</s>{" "}
                        <span className="text-success fw-bold">Free</span>
                      </span>
                    ) : (
                      <span id="price-style" className="text-primary mb-0">
                        {course.price}
                      </span>
                    )} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcomming Course */}
      {/* Upcoming Courses Section */}
      <div className="container mt-5">
        <h3 className="text-primary text-center mb-4">Upcoming Courses</h3>
        <div className="row">
          {upcomingCourses.map((course, index) => (
            <div
              className="col-12 col-md-4 col-sm-12 col-lg-4 mb-3"
              key={index}
            >
              <div className="card shadow p-3 border-0 text-center">
                <h5 className="text-dark fw-bold">{course}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
