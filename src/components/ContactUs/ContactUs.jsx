import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import SharedBtn from "../../SharedBtn";
import "./contact-us.css";
export function ContactUs() {
  return (
    <div
      className="container my-5"
      style={{
        color: "#fff",
      }}>
      <Row className="align-items-center g-3">
        <Col md={5} className="mb-2">
          <h2 className="mb-2  fw-bold">Contact Us</h2>
          <p className="text-white-50">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit, dolor!
          </p>
          <img src="../../../src/assets/contact-us-2.svg" className="w-100" />
        </Col>
        <Col md={7} className="p-5 contact__form rounded-1 shadow-lg">
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="text-white-50">Your Name</Form.Label>
              <Form.Control
                className=" px-2 py-2 py-lg-3"
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="text-white-50">Email address</Form.Label>
              <Form.Control
                className=" px-2 py-2 py-lg-3"
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label className="text-white-50">Message</Form.Label>
              <Form.Control
                className=" px-2 py-2 py-lg-3"
                as="textarea"
                rows={4}
                placeholder="Your message..."
              />
            </Form.Group>

            <SharedBtn>Send Message</SharedBtn>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
