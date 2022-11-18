import React from "react";
import { Link } from "react-router-dom";

export default function OriginList({ origins }) {
  return (
    <div>
      <h2>Origins</h2>
      <ul className="list-group">
        {origins.map(({ id, name }) => (
          <Link to={`/origin/${id}`} key={id} style={{ textDecoration: "none" }}>
            <li key={id} className="list-group-item btn btn-secondary">
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
