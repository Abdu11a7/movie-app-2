import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import "../styles/MoviesSection.css";

export default function MoviesSection({
  title,
  movies,
  showGenres = false,
  showReleaseDates = false,
}) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="container movies-section mt-5">
      <div className="section-header">
        <h2 className="section-title text-white">{title}</h2>
      </div>

      {showGenres && (
        <div className="genres-section">
          <h4 className="section-subtitle">Our Genres</h4>
          <div className="genres-list">
            <span className="genre-link">Action →</span>
            <span className="genre-link">Adventure →</span>
            <span className="genre-link">Comedy →</span>
            <span className="genre-link">Drama →</span>
            <span className="genre-link">Horror →</span>
          </div>
        </div>
      )}

      {showReleaseDates && (
        <div className="release-dates">
          {movies.slice(0, 4).map((movie, index) => (
            <div key={index} className="release-date">
              Released at {movie.Released}
            </div>
          ))}
        </div>
      )}

      <Row className="movies-row">
        {movies.slice(0, 4).map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
