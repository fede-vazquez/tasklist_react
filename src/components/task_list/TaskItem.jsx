import React from "react";
import TaskRepeatInfo from "./TaskRepeatInfo";

function TaskItem({ task }) {
  const namesRepeatDays = task.weekDaySelected.map((day) => day.checkboxName);

  return (
    <div className="row m-0 border border-start-0 border-end-0 py-1">
      <div className="col-2 d-flex align-items-center p-0 justify-content-end">
        <i className="fa-regular fa-circle-check fs-4"></i>
      </div>
      <div className="col-10">
        <TaskRepeatInfo daysRepeat={namesRepeatDays} />
        <p className="fw-bolder">{task.title}</p>
        <div className="d-flex justify-content-between">
          <p className="fs-7">{task.hour}</p>
          <p className="fs-7 pe-3">{task.genre}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
