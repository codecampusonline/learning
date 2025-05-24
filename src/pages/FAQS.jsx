import React, { useState } from 'react';
import '../pages/css/faqs.css';

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When do the courses start?",
      answer: "Our courses start on the 1st of every month. You can enroll any time before that."
    },
    {
      question: "Are you providing certification?",
      answer: "Yes, we provide certification upon successful completion of the course."
    },
    {
      question: "Are the courses online or offline?",
      answer: "All our courses are conducted online to ensure flexibility and accessibility."
    },
    {
      question: "Do you offer live classes or recorded sessions?",
      answer: "We provide both live interactive sessions and access to recorded lectures for your convenience."
    },
    {
      question: "Is there any placement support?",
      answer: "Yes, we offer placement assistance and guidance to help you land relevant job opportunities."
    },
    {
      question: "Can I get a demo class before enrolling?",
      answer: "Absolutely! We offer a free demo class to help you decide before enrolling."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-header" onClick={() => toggleFAQ(index)}>
              <span className="faq-toggle-icon">
                {openIndex === index ? '−' : '+'}
              </span>
              <h4 className="faq-question">{faq.question}</h4>
            </div>
            {openIndex === index && (
              <p className="faq-answer">✅ {faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
