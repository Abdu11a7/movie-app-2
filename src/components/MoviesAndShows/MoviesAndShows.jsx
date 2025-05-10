import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import MovieCard from "../MovieCard";
import { getAllGenres, getAllMovies } from "../../API/FetchData";
import { data } from "react-router-dom";

export function MoviesAndShows() {
  const [movies] = useState([
    {
      Title: "Vivre sa vie",
      Year: "1962",
      Rated: "Not Rated",
      Released: "20 Sep 1962",
      Runtime: "85 min",
      Genre: ["Drama"],
      Director: ["Jean-Luc Godard"],
      Writer: ["Marcel Sacotte", "Jean-Luc Godard"],
      Actors: ["Anna Karina", "Sady Rebbot", "André S. Labarthe"],
      Plot: 'This film explores a Parisian woman\'s descent into prostitution. The movie is comprised of a series of 12 "tableaux"-- scenes which are basically unconnected episodes, each presented with a worded introduction.',
      Language: ["French"],
      Country: ["France"],
      Awards: "3 wins & 1 nomination total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDUwNDc1YjMtOWQwOS00OGJiLWFlODQtNjAzMjkwOTRhZmQ2XkEyXkFqcGc@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.8/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "91%",
        },
      ],
      Metascore: "N/A",
      imdbRating: "7.8",
      imdbVotes: "36,059",
      id: "tt0056663",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "$24,517",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
      Popular: "false",
    },
    {
      Title: "Vivre sa vie",
      Year: "1962",
      Rated: "Not Rated",
      Released: "20 Sep 1962",
      Runtime: "85 min",
      Genre: ["Drama"],
      Director: ["Jean-Luc Godard"],
      Writer: ["Marcel Sacotte", "Jean-Luc Godard"],
      Actors: ["Anna Karina", "Sady Rebbot", "André S. Labarthe"],
      Plot: 'This film explores a Parisian woman\'s descent into prostitution. The movie is comprised of a series of 12 "tableaux"-- scenes which are basically unconnected episodes, each presented with a worded introduction.',
      Language: ["French"],
      Country: ["France"],
      Awards: "3 wins & 1 nomination total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDUwNDc1YjMtOWQwOS00OGJiLWFlODQtNjAzMjkwOTRhZmQ2XkEyXkFqcGc@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.8/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "91%",
        },
      ],
      Metascore: "N/A",
      imdbRating: "7.8",
      imdbVotes: "36,059",
      id: "tt0056663",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "$24,517",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
      Popular: "false",
    },
    {
      Title: "Vivre sa vie",
      Year: "1962",
      Rated: "Not Rated",
      Released: "20 Sep 1962",
      Runtime: "85 min",
      Genre: ["Drama"],
      Director: ["Jean-Luc Godard"],
      Writer: ["Marcel Sacotte", "Jean-Luc Godard"],
      Actors: ["Anna Karina", "Sady Rebbot", "André S. Labarthe"],
      Plot: 'This film explores a Parisian woman\'s descent into prostitution. The movie is comprised of a series of 12 "tableaux"-- scenes which are basically unconnected episodes, each presented with a worded introduction.',
      Language: ["French"],
      Country: ["France"],
      Awards: "3 wins & 1 nomination total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDUwNDc1YjMtOWQwOS00OGJiLWFlODQtNjAzMjkwOTRhZmQ2XkEyXkFqcGc@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.8/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "91%",
        },
      ],
      Metascore: "N/A",
      imdbRating: "7.8",
      imdbVotes: "36,059",
      id: "tt0056663",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "$24,517",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
      Popular: "false",
    },
    {
      Title: "Vivre sa vie",
      Year: "1962",
      Rated: "Not Rated",
      Released: "20 Sep 1962",
      Runtime: "85 min",
      Genre: ["Drama"],
      Director: ["Jean-Luc Godard"],
      Writer: ["Marcel Sacotte", "Jean-Luc Godard"],
      Actors: ["Anna Karina", "Sady Rebbot", "André S. Labarthe"],
      Plot: 'This film explores a Parisian woman\'s descent into prostitution. The movie is comprised of a series of 12 "tableaux"-- scenes which are basically unconnected episodes, each presented with a worded introduction.',
      Language: ["French"],
      Country: ["France"],
      Awards: "3 wins & 1 nomination total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDUwNDc1YjMtOWQwOS00OGJiLWFlODQtNjAzMjkwOTRhZmQ2XkEyXkFqcGc@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.8/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "91%",
        },
      ],
      Metascore: "N/A",
      imdbRating: "7.8",
      imdbVotes: "36,059",
      id: "tt0056663",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "$24,517",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
      Popular: "false",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [genre, setGenre] = useState([]);
  const getInputValues = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.Title.toLowerCase().includes(searchTerm);
    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  useEffect(() => {
    const loadGenres = async () => {
      const genreList = await getAllGenres();
      setGenre(genreList);
    };
    loadGenres();
  }, []);
  return (
    <div
      className="container mt-3"
      style={{
        color: "#fff",
      }}
    >
      <h1 className="text-center mb-5 fw-bold">Movies</h1>
      <Form className="d-flex   mb-4 justify-content-center align-items-center">
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
        </InputGroup>
        <Form.Select
          style={{
            width: "200px",
            fontWeight: "bold",
            backgroundColor: "#111",
            color: "#fff",
            marginLeft: "1rem",
          }}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="ALL">All Genres</option>
          {genre.map((index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </Form.Select>
      </Form>

      <Row className="g-4">
        {filteredMovies.length === 0 ? (
          <h3 className="text-muted text-center">No movies found</h3>
        ) : (
          filteredMovies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <div className="">
                <MovieCard
                  style={{
                    backgroundColor: "#000",
                    boxSizing: "border-box",
                  }}
                  movie={movie}
                />
              </div>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}
