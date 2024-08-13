import React from "react";
import "./Card.css";

export default function Card ({frontValue, backValue, handleDelete, index}) {
    return (
        <div className="card card-front">
            <a className="card-delete" href="#" onClick={() => handleDelete(index)}>X</a>
            <p className="card-text">{frontValue}</p>
            <p className="card-text-hidden">{backValue}</p>
        </div>
    );
}