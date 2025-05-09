import React, { useState, useEffect } from "react";
import BoardHeader from "../BoardHeader";
import "../../styles/DashBoard.css";
import BoardList from "../BoardList";

export default function DashBoard() {
  const [media, setMedia] = useState([]);
  const [filteredMedia, setFilteredMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch("../server/data.json");
        const data = await response.json();
        setMedia(data.movies || []);
        setFilteredMedia(data.movies || []);
      } catch (error) {
        console.error("Error fetching media:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
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

  const handleAdd = () => {};

  const handleEdit = () => {};

  const handleDelete = (itemToDelete) => {
    if (
      window.confirm(`Are you sure you want to delete "${itemToDelete.Title}"?`)
    ) {
      const updatedMedia = media.filter((item) => item.id !== itemToDelete.id);
      setMedia(updatedMedia);
      setFilteredMedia(updatedMedia);
    }
  };

  const handleShow = () => {};

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
  };

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <BoardHeader onSearch={handleSearch} onAdd={handleAdd} />
      <BoardList
        media={filteredMedia}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onShow={handleShow}
        onSignOut={handleSignOut}
      />
    </div>
  );
}
