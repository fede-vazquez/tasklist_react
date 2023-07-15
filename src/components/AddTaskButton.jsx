import React from "react";
import { Link } from "react-router-dom";

function AddTaskButton({ dateSelected }) {
  return (
    <div className="text-center my-4 my-md-5">
      <Link
        to={`/form?date=${dateSelected}`}
        className="btn-1 bg-2 py-3 rounded-3"
      >
        <i className="fa-solid fa-plus col-12 col-sm-10 col-md-6 h-100"></i>
      </Link>
    </div>
  );
}

export default AddTaskButton;
