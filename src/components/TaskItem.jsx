import React from "react";
import TaskRepeatInfo from "./TaskRepeatInfo";
import { Link } from "react-router-dom";

function TaskItem({ task }) {
  const namesRepeatDays = task.weekDaySelected.map((day) => day.checkboxName);

  return (
    <Link to={`/detail?task=${task.id}`} className="col-10">
      <TaskRepeatInfo daysRepeat={namesRepeatDays} />
      <p className="fw-bolder">{task.title}</p>
      <div className="d-flex justify-content-between">
        <p className="fs-7">{task.allDay ? "Todo el día" : task.hour}</p>
        <p className="fs-7 pe-3">{task.genre}</p>
      </div>
    </Link>
  );
}

export default TaskItem;
