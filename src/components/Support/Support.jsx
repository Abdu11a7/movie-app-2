import React, { useState } from "react";
import SharedBtn from "../../SharedBtn";
import "./support.css";

const FAQS = [
  {
    id: 1,
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is an online streaming platform that offers a wide selection of movies, TV shows, and exclusive content that you can watch anytime, anywhere.",
  },
  {
    id: 2,
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe offers multiple subscription plans starting at $9.99/month. Prices vary depending on the features and number of screens you choose.",
  },
  {
    id: 3,
    question: "What content is available on StreamVibe?",
    answer:
      "You can access a diverse library of popular movies, series, documentaries, and original content produced exclusively for StreamVibe users.",
  },
  {
    id: 4,
    question: "How can I watch StreamVibe?",
    answer:
      "You can watch StreamVibe through our website, mobile apps (iOS and Android), smart TVs, and popular streaming devices like Roku, Fire Stick, and Apple TV.",
  },
  {
    id: 5,
    question: "How do I sign up for StreamVibe?",
    answer:
      "Simply visit our website, click on 'Sign Up', choose a subscription plan, and create an account using your email and payment details.",
  },
  {
    id: 6,
    question: "What is the StreamVibe free trial?",
    answer:
      "StreamVibe offers a 7-day free trial so you can explore our content and features before committing to a paid plan. Cancel anytime during the trial to avoid charges.",
  },
  {
    id: 7,
    question: "How do I contact StreamVibe customer support?",
    answer:
      "You can reach our support team via the 'Contact Us' page on our website, or email us at support@streamvibe.com. Live chat is also available 24/7.",
  },
  {
    id: 8,
    question: "What are the StreamVibe payment methods?",
    answer:
      "We accept all major credit and debit cards, PayPal, and other local payment options depending on your region.",
  },
];

export default function Support() {
  return (
    <>
      <main className="my-5 support">
        <div className="container">
          <div className="row g-3 align-items-center">
            <header className="col-lg-4">
              <h1>Welcome to our support page!</h1>
              <p className="text-white-50">
                We're here to help you with any problems you may be having with
                our product.
              </p>
              <div className="main__image">
                <img
                  className="w-100"
                  src="../../src/assets/Sub.png"
                  alt="Sub Image"
                />
              </div>
            </header>
            <div className="form__support col-lg-8">
              <form className="row g-3 shadow-sm rounded">
                <div className="col-md-6">
                  <label htmlFor="fristName" className="form-label">
                    Frist Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Frist Name"
                    className="form-control px-2 py-2 py-lg-3"
                    id="fristName"
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="lastName"
                    placeholder="Enter Last Name"
                    className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="form-control px-2 py-2 py-lg-3"
                    id="lastName"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control px-2 py-2 py-lg-3"
                    placeholder="Enter Your Email"
                    id="email"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control px-2 py-2 py-lg-3"
                    placeholder="Enter Your Message"
                    id="message"></textarea>
                </div>
                <div className="col-12 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      I agree with Terms of Use and Privacy Policy
                    </label>
                  </div>
                  <div className="">
                    <SharedBtn>Send Message</SharedBtn>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="main__questions my-5">
            <div className="start d-flex flex-wrap justify-content-between align-items-center">
              <header>
                <h3>Frequently Asked Questions</h3>
                <p className="text-white-50">
                  Got questions? We've got answers! Check out our FAQ section to
                  find answers to the most common questions about StreamVibe.
                </p>
              </header>
            </div>
            <div className="questions__holder row">
              {FAQS.map((quse) => (
                <Question question={quse} key={quse.id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function Question({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <article className="question px-5 col-lg-6 my-3">
      <div className="d-flex py-3 justify-content-between align-items-center">
        <span className="question__number py-2 px-3 rounded fs-5">
          {question.id}
        </span>
        <h5 className="qusetion fw-normal">{question.question}</h5>
        <span className="question__cloapse" onClick={toggle}>
          <img
            src={
              isOpen
                ? "../../../src/assets/Icon-plus.svg"
                : "../../../src/assets/Icon.svg"
            }
            alt=""
          />
        </span>
      </div>

      <div className={`answer-wrapper ${isOpen ? "open" : ""}`}>
        <p className="text-center text-white-50 p-2">{question.answer}</p>
      </div>

      <hr />
    </article>
  );
}
