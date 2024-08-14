import React from "react";
import "./Card.css";

export default function Card({
  frontValue,
  handleFlip,
  isFlipped,
  backValue,
  handleDelete,
  index,
}) {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={() => handleFlip(index)}
    >
      <div className="card-content">
        <a
          className="card-delete"
          href="#"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(index);
          }}
        >
          X
        </a>
        {isFlipped ? <p>{backValue}</p> : <p>{frontValue}</p>}
      </div>
    </div>
  );
}
