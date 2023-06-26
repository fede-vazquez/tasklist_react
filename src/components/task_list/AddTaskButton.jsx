import React from "react";
import { Link } from "react-router-dom";

function AddTaskButton({ dateSelected }) {
  return (
    <div className="text-center my-4">
      <Link
        to={`/taskList/form?date=${dateSelected}`}
        className="btn-1 bg-2 py-3 rounded-3"
      >
        <i className="fa-solid fa-plus w-75 h-100"></i>
      </Link>
    </div>
  );
}

export default AddTaskButton;
