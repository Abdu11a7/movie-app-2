import React, { useState } from "react";
import { Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { MovieCard } from "./../MovieCard";

export function MoviesAndShows() {
  const [movies] = useState([
    { name: "Inception", rate: 8.8, year: 2010, genre: "Sci-Fi" },
    { name: "The Dark Knight", rate: 9.0, year: 2008, genre: "Action" },
    { name: "Interstellar", rate: 8.6, year: 2014, genre: "Sci-Fi" },
    { name: "Parasite", rate: 8.6, year: 2019, genre: "Thriller" },
    { name: "The Godfather", rate: 9.2, year: 1972, genre: "Crime" },
    {
      name: "The Hunger Games part 1",
      rate: 9.2,
      year: 2017,
      genre: "Action",
    },
    {
      name: "The Avengers part 2",
      rate: 9.2,
      year: 2017,
      genre: "Action",
    },
    {
      name: "The Avengers End Game",
      rate: 9.2,
      year: 2020,
      genre: "Action",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const getInputValues = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.name.toLowerCase().includes(searchTerm);
    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div
      className="container"
      style={{
        color: "#fff",
      }}>
      <h1 className="text-center mb-5 fw-bold">Movies</h1>
      <Form className="d-flex justify-content-center mb-4">
        <InputGroup className="w-50">
          <Form.Control
            type="text"
            placeholder="search..."
            onChange={getInputValues}
            className="fw-bold"
            style={{
              backgroundColor: "#111",
              color: "#fff",
              borderColor: "#333",
            }}
          />
          <Button
            style={{
              borderRadius: "0 0.5rem 0.5rem 0",
              backgroundColor: "#e3080f",
              borderColor: "#e3080f",
              fontWeight: "bold",
              padding: "0.5rem 1.2rem",
            }}>
            Search
          </Button>
        </InputGroup>
        <Form.Select
          style={{
            width: "200px",
            fontWeight: "bold",
            backgroundColor: "#111",
            color: "#fff",
            marginLeft: "1rem",
          }}
          onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="All">All Genres</option>
          <option value="Action">Action</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Comedy">Comedy</option>
        </Form.Select>
      </Form>

      <Row className="justify-content-center">
        {filteredMovies.length === 0 ? (
          <h3 className="text-muted text-center">No movies found</h3>
        ) : (
          filteredMovies.map((movie) => (
            <Col
              key={movie.name}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center mb-4">
              <MovieCard
                style={{
                  backgroundColor: "#000",
                  boxSizing: "border-box",
                }}
                movie={movie}
              />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}
