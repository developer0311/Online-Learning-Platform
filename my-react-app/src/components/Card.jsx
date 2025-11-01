import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link
      to={`/courses/${props.page_source}`} // 👈 navigate to course details using id
      className="card text-decoration-none"
    >
      <div className="card-img p-2 d-flex justify-content-center align-items-center">
        <img
          src={props.img_source}
          className="img-fluid"
          alt={props.title}
          style={{ maxHeight: "180px", objectFit: "contain" }}
        />
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-dark">{props.title}</h5>
        <p className="card-text text-muted">
          {props.text.length > 50 ? props.text.slice(0, 50) + "..." : text}
        </p>
      </div>
    </Link>
  );
}

export default Card;
