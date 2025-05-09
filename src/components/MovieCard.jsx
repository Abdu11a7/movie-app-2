import { Button, Card } from "react-bootstrap";
import { FaPlay, FaCalendarAlt, FaFilm, FaStar } from "react-icons/fa";

export function MovieCard({ movie }) {
  const { name, genre, year, rate } = movie;
  const handleClick = () => {
    console.log("Icon clicked!");
  };

  return (
    <Card
      style={{
        width: "20rem",
        backgroundColor: "#1c1c1c",
        color: "#fff",
        border: "1px solid #9c9898",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(58, 57, 57, 0.6)",
        overflow: "hidden",
        position: "relative",
        boxSizing: "border-box",
      }}
      className="movie-card">
      <div style={{ position: "relative" }}>
        <Card.Img
          variant="top"
          src="1.jpg"
          style={{
            height: "350px",
            objectFit: "cover",
          }}
        />
        <div className="hover-icon" onClick={handleClick}>
          <FaPlay size={30} />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#111",
          color: "#fff",
          width: "100%",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxSizing: "border-box",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
        }}>
        <Card.Title
          style={{
            fontWeight: "600",
            fontSize: "1.25rem",
            marginBottom: "0.5rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}>
          {name}
        </Card.Title>
        <div style={{ fontSize: "0.9rem", lineHeight: "1.8" }}>
          <div className="d-flex justify-content-between align-items-center">
            <span>{genre}</span>
            <span>{year}</span>
          </div>
          <div></div>
          <div>
            <FaStar color="red" /> <strong>Rating:</strong> {rate}/10
          </div>
        </div>
      </div>
    </Card>
  );
}
