import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaPlus, FaSignOutAlt } from "react-icons/fa";

export default function BoardHeader({ onSearch, onAdd, onSignOut }) {
  return (
    <header className="my-3">
      <h2 className="text-white text-center mb-4">
        Welcome, This Is Our Collection Of Movies & Series
      </h2>
      <div className="d-flex justify-content-between flex-wrap  align-items-center">
        <div className="action-buttons">
          <Button variant="red-accent" onClick={onAdd}>
            <FaPlus /> Add New Item
          </Button>
          <Button
            variant="btn"
            className="btn-outline-red fw-bold"
            onClick={onSignOut}>
            <FaSignOutAlt /> Sign Out
          </Button>
        </div>
        <InputGroup className="search-bar w-100">
          <Form.Control
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
          />
          <InputGroup.Text>
            <i className="fas fa-search"></i>
          </InputGroup.Text>
        </InputGroup>
      </div>
    </header>
  );
}
