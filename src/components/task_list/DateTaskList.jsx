import React from "react";
import TaskItem from "./TaskItem";

function DateTaskList({ date }) {
  return (
    <div className="text-white bg-2">
      <ul>
        <TaskItem />
      </ul>
    </div>
  );
}

export default DateTaskList;
