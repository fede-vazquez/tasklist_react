import React from "react";
import TaskRepeatInfo from "./TaskRepeatInfo";
import { Link } from "react-router-dom";

function TaskItem({ task }) {
  const namesRepeatDays = task.weekDaySelected.map((day) => day.checkboxName);

  function handleCheckedBackground(e) {
    const containerInput = e.target.parentNode;
    if (!containerInput.classList.contains("circle-checkbox-active")) {
      containerInput.classList.add("circle-checkbox-active");
    } else {
      containerInput.classList.remove("circle-checkbox-active");
    }
  }

  return (
    <div className="row m-0 border border-start-0 border-end-0 py-1">
      <div className="col-2 p-0 d-flex justify-content-center align-items-center">
        <div className="position-relative rounded-5 circle-checkbox d-flex justify-content-center align-items-center fw-bold">
          <i className="fa-solid fa-check"></i>
          <div
            className="position-absolute w-100 h-100"
            onClick={(e) => {
              handleCheckedBackground(e);
            }}
          ></div>
        </div>
      </div>

      <Link to={`/tasklist/detail?task=${task.id}`} className="col-10">
        <TaskRepeatInfo daysRepeat={namesRepeatDays} />
        <p className="fw-bolder">{task.title}</p>
        <div className="d-flex justify-content-between">
          <p className="fs-7">{task.allDay ? "Todo el día" : task.hour}</p>
          <p className="fs-7 pe-3">{task.genre}</p>
        </div>
      </Link>
    </div>
  );
}

export default TaskItem;
