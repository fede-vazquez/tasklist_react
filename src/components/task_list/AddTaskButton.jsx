import React from "react";
import { Link } from "react-router-dom";

function AddTaskButton() {
  return (
    <div className="text-center my-4">
      <Link to="/taskList" className="btn-1 text-white bg-2 py-3 rounded-3">
        <i class="fa-solid fa-plus w-75 h-100"></i>
      </Link>
    </div>
  );
}

export default AddTaskButton;
