import React from "react";

function TaskRepeatInfo({ daysRepeat }) {
  let taskRepeatInfo = "algo";

  if (daysRepeat == "no repeat") {
    taskRepeatInfo = "no se repite";
  }
  return <p className="text-end pe-3 fs-7">{taskRepeatInfo}</p>;
}

export default TaskRepeatInfo;
