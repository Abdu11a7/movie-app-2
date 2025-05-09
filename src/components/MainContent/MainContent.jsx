import React from "react";
import style from "./MainContent.module.css";
export default function MainContent() {
  return (
    <div className="bg-dark bg-opacity-75 p-4 rounded border-start border-4 border-danger">
      <h4 className={`${style.mainColor} mb-3`}>
        EVERY JOURNEY HAS ITS SACRIFICE
      </h4>

      <p className="mb-3">
        In the wilderness of the 19th century, frontiersman Hugh Glass battles
        unimaginable hardship to survive and exact revenge on those who left him
        for dead. What starts as a tale of survival becomes a brutal,
        heartbreaking journey through the American wilderness.
      </p>

      <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>

      <div className="mt-4">
        <h5 className="text-danger">CREATORS</h5>
        <div className="d-flex gap-3 mt-2">
          <span>Alejandro G. Iñárritu</span>
          <span>Mark L. Smith</span>
        </div>
      </div>
    </div>
  );
}
