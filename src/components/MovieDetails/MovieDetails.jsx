import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import HeaderSection from "./../HeaderSection/HeaderSection";
import ReviewsSection from "./../ReviewsSection/ReviewsSection";
import ReviewModal from "./../ReviewModal/ReviewModal";
import ActionSection from "../ActionSection/ActionSection";
import MainContent from "./../MainContent/MainContent";
import TrailerModal from "./../TrailerModal/TrailerModal";

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
    <div
      className="text-white min-vh-100 py-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${movie.Poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <Container>
        <HeaderSection
          title={movie.Title}
          year={movie.Year}
          rating={movie.Rated}
          genre={movie.Genre.join(", ")}
        />

        <Row className="mt-4">
          <Col md={8}>
            <MainContent description={movie.Plot} creators={movie.Director} />
          </Col>

          <Col md={4}>
            <ActionSection
              userScore={movie.imdbRating * 10}
              moviePoster={movie.Poster}
              onWatchTrailer={() => setShowTrailer(true)}
              onAddToWatchlist={() => {}}
            />
          </Col>
        </Row>

        <ReviewsSection
          reviews={movie.Ratings}
          onAddReview={() => setShowReview(true)}
        />
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
    </div>
  );
}
