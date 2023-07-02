import React from "react";

function ButtonsDeleteEdit({ task, setShowAlert }) {
  function showDeleteAlert() {
    setShowAlert(true);
  }

  return (
    <div className="row justify-content-evenly mt-4">
      <button
        className="delete-button btn py-3 col-4"
        onClick={(e) => {
          showDeleteAlert();
        }}
      >
        <i className="fa-solid fs-2 text-white fa-trash"></i>
      </button>
      <button className="edit-button btn py-3 col-4">
        <i className="fa-solid fs-2 text-white fa-pen-to-square"></i>
      </button>
    </div>
  );
}

export default ButtonsDeleteEdit;
