import React, { useState, useEffect } from "react";
import BoardHeader from "../BoardHeader";
import "../../styles/DashBoard.css";
import BoardList from "../BoardList";
import {
  checkIfAdminLogged,
  deleteMovie,
  getAllMovies,
} from "./../../API/FetchData";
import { Button, Modal, Table } from "react-bootstrap";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(false); // Changed to boolean
  const [filteredMedia, setFilteredMedia] = useState([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const data = await getAllMovies();
      setMedia(data);
      setFilteredMedia(data); // Initialize filtered media with all data
      console.log(data); // Log the fresh data
    } catch (err) {
      setError(err.message);
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (checkIfAdminLogged()) {
      fetchMovies();
    } else {
      navigate("/admin");
    }
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = media.filter(
      (item) =>
        item.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Genre?.some((g) =>
          g.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredMedia(filtered);
  };

  const handleAdd = () => {
    navigate("/movies/0/edit");
  };

  const handleEdit = (id) => {
    navigate(`/movies/${id}/edit`);
  };

  const handleDelete = async (imdbID) => {
    try {
      await deleteMovie(imdbID);
      fetchMovies(); // Assuming you have a function to refresh the list
    } catch (error) {
      alert(`Delete failed: ${error.message}`);
    }
  };

  const handleView = (id) => {
    navigate(`/moviedetails/${id}`);
  };

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <BoardHeader onSearch={handleSearch} onAdd={handleAdd} />
      <div className="board-list">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Genre</th>
              <th>IMDB Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {media.map((item) => (
              <tr key={item.id}>
                <td>{item.Title}</td>
                <td>{item.Type}</td>
                <td>{item.Genre?.join(", ") || "-"}</td>
                <td>{item.imdbRating}</td>
                <td className="actions-cell">
                  <Button
                    variant="outline-info"
                    size="sm"
                    onClick={() => handleView(item.id)}
                  >
                    <FaEye />
                  </Button>{" "}
                  <Button
                    variant="outline-warning"
                    size="sm"
                    onClick={() => handleEdit(item.id)}
                  >
                    <FaEdit />
                  </Button>{" "}
                  <Button
                    variant="btn"
                    className="btn-outline-red"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
