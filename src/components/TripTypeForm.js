import APIService from "../services/APIService";
import { useState } from "react";

export default function TripTypeForm() {
  const [inputs, setInputs] = useState({
    tripdate: new Date().toISOString().split("T")[0],
    triptype: "one"
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    // POST REQUEST
  };

  return (
    <form className="row my-4" method="POST" action={APIService.url("travels")}>
      <div className="form-check col-4">
        <label htmlFor="date">Travel date:</label>
        <input
          type="date"
          id="date"
          name="tripdate"
          value={inputs.date}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>

      <div className="form-check col-4">
        <input
          className="form-check-input"
          type="radio"
          id="one-way"
          name="triptype"
          value="one"
          onClick={handleChange}
        />
        <label className="form-check-label" htmlFor="one-way">
          One way
        </label>
      </div>
      <br />
      <div className="form-check col-4">
        <input
          className="form-check-input"
          type="radio"
          id="round-trip"
          name="triptype"
          onChange={handleChange}
          value="round"
        />
        <label className="form-check-label" htmlFor="round-trip">
          Round Trip
        </label>
      </div>

      <br />
      <input
        className="btn btn-primary col-12 my-2"
        type="submit"
        value="Submit"
      />
    </form>
  );
}
