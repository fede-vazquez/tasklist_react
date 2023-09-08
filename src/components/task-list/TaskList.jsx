import React from "react";
import ButtonCompleteTask from "./ButtonCompleteTask";
import TaskItem from "../TaskItem";

function TaskList({ dateTasks, dateCompleteFormat, weekDayNumber }) {
  return (
    <ul className="w-100">
      {dateTasks.map((task, i) => {
        return (
          <li
            key={task.id + "" + i}
            className="row m-0 border border-start-0 border-end-0 py-1 justify-content-center align-items-center"
          >
            <ButtonCompleteTask
              taskId={task.id}
              dateCompleteFormat={dateCompleteFormat}
              weekDayNumber={weekDayNumber}
            />
            <TaskItem task={task} />
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
