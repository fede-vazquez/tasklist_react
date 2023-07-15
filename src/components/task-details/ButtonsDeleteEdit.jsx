import React from "react";
import { Link } from "react-router-dom";

function ButtonsDeleteEdit({ task, setShowAlert }) {
  function showDeleteAlert() {
    setShowAlert(true);
  }

  return (
    <div className="row justify-content-evenly mt-4 mx-0">
      <button
        className="delete-button btn py-3 col-4"
        onClick={(e) => {
          showDeleteAlert();
        }}
      >
        <i className="fa-solid fs-2 text-white fa-trash"></i>
      </button>
      <button className="edit-button btn py-3 col-4">
        <Link to={`/edit?task=${task.id}`}>
          <i className="w-100 h-100 fa-solid fs-2 text-white fa-pen-to-square"></i>
        </Link>
      </button>
    </div>
  );
}

export default ButtonsDeleteEdit;
