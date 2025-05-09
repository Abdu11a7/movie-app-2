import React, { useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";

function ReviewModal({ show, onHide, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = () => {
    onSubmit({
      Source: "User",
      Value: `${rating}/5`,
      Content: reviewText,
    });
    setRating(0);
    setReviewText("");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Your Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Your Rating</Form.Label>
            <div className="d-flex align-items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  key={star}
                  className={`bi ${
                    star <= rating
                      ? "bi-star-fill text-warning"
                      : "bi-star text-secondary"
                  }`}
                  style={{ fontSize: "1.75rem", cursor: "pointer" }}
                  onClick={() => setRating(star)}
                ></i>
              ))}
            </div>
          </Form.Group>

          <FloatingLabel
            controlId="reviewText"
            label="Your Review"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Your review"
              style={{ height: "100px" }}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            />
          </FloatingLabel>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button
          variant="#e3080f"
          onClick={handleSubmit}
          disabled={!reviewText || rating === 0}
        >
          Submit Review
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReviewModal;
