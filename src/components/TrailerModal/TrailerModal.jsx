import React from "react";
import { Modal, Button } from "react-bootstrap";

function TrailerModal({ show, onHide, movieTitle }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="text-dark">
      <Modal.Header closeButton>
        <Modal.Title>{movieTitle} - Trailer</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="ratio ratio-16x9">
          <div className="d-flex justify-content-center align-items-center bg-dark text-white">
            <iframe
              width="1351"
              height="480"
              src="https://www.youtube.com/embed/LoebZZ8K5N0"
              title="The Revenant | Official Trailer [HD] | 20th Century FOX"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TrailerModal;
