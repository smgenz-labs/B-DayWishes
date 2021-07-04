import React from "react";
import "../styles/CardForm.css";
import { Link } from "react-router-dom";

const CardForm = () => {
  return (
    <>
      <div className="form__main">
        <h1>This is a form</h1>
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
    </>
  );
};

export default CardForm;
