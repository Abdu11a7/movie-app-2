import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { PersonFill, Plus } from "react-bootstrap-icons";
import styles from "./ReviewsSection.module.css";
function ReviewsSection({ reviews, onAddReview }) {
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className={styles.hColor}>USER REVIEWS</h4>
        <Button
          variant="outline-danger"
          className="rounded-pill px-4 fw-bold"
          onClick={onAddReview}
        >
          <Plus className={`me-2 ${styles.hColor} `} />
          Add Review
        </Button>
      </div>

      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <Card key={index} className="bg-dark bg-opacity-50 p-3 rounded mb-3">
            <div className="d-flex align-items-center gap-3 mb-2">
              <Badge bg="danger" className="fs-6 p-2">
                <PersonFill />
              </Badge>
              <span className="fw-bold text-white">
                {review.Source || "Ahmed"}
              </span>
              <div className="text-warning">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < (parseInt(review.Value?.split("/")[0]) || 0) ? (
                      <i className="bi bi-star-fill"></i>
                    ) : (
                      <i className="bi bi-star"></i>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <p className="mb-0 text-white">{review.Content || review.Value}</p>
          </Card>
        ))
      ) : (
        <Card className="bg-dark bg-opacity-50 p-3 rounded text-center">
          <p className="text-white">No reviews yet. Be the first to review!</p>
        </Card>
      )}
    </div>
  );
}

export default ReviewsSection;
