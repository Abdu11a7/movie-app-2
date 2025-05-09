import React from "react";
import { Badge } from "react-bootstrap";
import style from "./HeaderSection.module.css";
export default function HeaderSection() {
  return (
    <div>
      <h1 className={`${style.hColor} fw-bold`}>THE REVENANT: LAST JOURNEY</h1>
      <div className="d-flex gap-2 my-3">
        <Badge bg="danger">2023</Badge>
        <Badge bg="dark">TV-MA</Badge>
        <Badge bg="dark">Drama</Badge>
      </div>
    </div>
  );
}
