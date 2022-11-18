import TripTypeForm from "./TripTypeForm";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DestinationList({ destinations }) {
  const [visibleForm, setVisibleForm] = useState(false);

  const showTripType = ({ target }) => {
    // Marcamos o desmarcamos el elemento clicado
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      setVisibleForm(false);
    } else {
      document.querySelectorAll("ul li.active").forEach((li) => {
        li.classList.remove("active");
      });

      target.classList.add("active");
      setVisibleForm(true);
    }
  };

  return (
    <div>
      <Link className="btn btn-dark" to="/">Go back</Link>
      <h2>Destinations</h2>
      <ul className="list-group">
        {destinations.map(({ id, name }) => (
          <li
            key={id}
            className="list-group-item btn btn-secondary"
            onClick={showTripType}
          >
            {name}
          </li>
        ))}
      </ul>

      {visibleForm && <TripTypeForm />}
    </div>
  );
}
