import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link
      to={props.page_source}
      className="card text-decoration-none"
      style={{ width: "18rem" }}
    >
      <div className="card-img p-2 d-flex justify-content-center align-items-center">
        <img src={props.img_source} className="img-fluid" alt="Course" />
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-dark">{props.title}</h5>
        <p className="card-text text-muted">{props.text.slice(0, 50) + "..."}</p>
      </div>
    </Link>
  );
}

export default Card;
