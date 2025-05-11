import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import HeaderSection from "./../HeaderSection/HeaderSection";
import ReviewsSection from "./../ReviewsSection/ReviewsSection";
import ReviewModal from "./../ReviewModal/ReviewModal";
import ActionSection from "../ActionSection/ActionSection";
import MainContent from "./../MainContent/MainContent";
import TrailerModal from "./../TrailerModal/TrailerModal";
import { motion } from "framer-motion";

export default function MovieDetails() {
  const [showTrailer, setShowTrailer] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [reviews, setReviews] = useState([
    { user: "User1", rating: 4, text: "Amazing cinematography!" },
    { user: "User2", rating: 5, text: "One of the best shows this year" },
  ]);

  const movie = {
    Title: "THE REVENANT: LAST JOURNEY",
    Year: "2023",
    Rated: "TV-MA",
    Genre: ["Drama", "Adventure"],
    Plot: "In the wilderness of the 19th century, frontiersman Hugh Glass battles unimaginable hardship to survive and exact revenge on those who left him for dead. What starts as a tale of survival becomes a brutal, heartbreaking journey through the American wilderness.",
    Director: "Alejandro G. Iñárritu, Mark L. Smith",
    Poster:
      "https://the-take.com/assets/img/article/Screen_Shot_2016-01-21_at_11.11.10_AM.png",
    imdbRating: "8.8",
    Ratings: reviews,
  };

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <motion.div
      className="min-vh-100 d-flex align-items-start py-5"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%), url(${movie.Poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#f8f9fa", // light white for better readability
        fontFamily: "'Segoe UI', Roboto, sans-serif",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container className="px-4 px-md-5">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <HeaderSection
            title={movie.Title}
            year={movie.Year}
            rating={movie.Rated}
            genre={movie.Genre.join(", ")}
          />
        </motion.div>

        <Row className="mt-5 g-4">
          <Col md={4}>
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <ActionSection
                userScore={movie.imdbRating * 10}
                moviePoster={movie.Poster}
                onWatchTrailer={() => setShowTrailer(true)}
                onAddToWatchlist={() => {}}
              />
            </motion.div>
          </Col>
          <Col md={8}>
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <MainContent description={movie.Plot} creators={movie.Director} />
            </motion.div>
          </Col>
        </Row>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <ReviewsSection
            reviews={movie.Ratings}
            onAddReview={() => setShowReview(true)}
          />
        </motion.div>
      </Container>

      <TrailerModal
        show={showTrailer}
        onHide={() => setShowTrailer(false)}
        movieTitle={movie.Title}
      />

      <ReviewModal
        show={showReview}
        onHide={() => setShowReview(false)}
        onSubmit={addReview}
      />
    </motion.div>
  );
}
