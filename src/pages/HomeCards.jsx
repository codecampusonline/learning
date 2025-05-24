import React from 'react';
import './css/HomeCards.css'; // Import the CSS for animation and styles
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons

const HomeCards = () => {
  const cardData = [
    {
      id: 1,
      icon: "https://png.pngtree.com/png-vector/20221106/ourmid/pngtree-knowledgeable-presenter-black-glyph-icon-seminar-assistance-tutor-vector-png-image_40168080.jpg",
      name: "Expert Instructors",
      des: "Learn from industry professionals with years of experience in their respective fields.",
    },
    {
      id: 2,
      icon: "https://www.creativefabrica.com/wp-content/uploads/2021/07/09/Practice-Based-Learning-Line-Icon-Graphics-14475086-1.jpg",
      name: "Practical Projects",
      des: "Apply your knowledge with real-world projects that enhance your portfolio.",
    },
    {
      id: 3,
      icon: "https://static.thenounproject.com/png/426773-200.png",
      name: "Certification",
      des: "Receive a certificate of completion to showcase your new skills to employers.",
    },
  ];

  return (
    <div className="container py-5">
        <div className='text-center mb-5'>
            <h1 style={{color:"#062e92"}}>Why Choose CodeCampusOnline?</h1>
            <h5>We provide a comprehensive learning experience with expert instructors, hands-on projects, and a supportive community.</h5>
        </div>
      <div className="row">
        {cardData.map((card) => (
          <div key={card.id} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card animated-card text-center shadow h-100">
              <div className="card-body">
                <img src={card.icon} alt="" width={"70px"} height={"70px"} />
                <h5 className="card-title fw-bold">{card.name}</h5>
                <p className="card-text">{card.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
