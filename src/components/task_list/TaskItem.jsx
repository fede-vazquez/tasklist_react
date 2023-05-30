import React from "react";

function TaskItem() {
  // Maqueta para las tareas, luego será dinámico.
  return (
    <li className="row m-0 border border-start-0 border-end-0">
      <div className="col-2 d-flex align-items-center p-0 justify-content-end">
        <i class="fa-regular fa-circle-check fs-4"></i>
      </div>
      <div className="col-10">
        <p className="text-end pe-3 fs-7">repeat info</p>
        <p className="fw-bolder">task name</p>
        <div className="d-flex justify-content-between">
          <p className="fs-7">task hour</p>
          <p className="fs-7 pe-3">task genre</p>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
