import React, { useState } from "react";
import ButtonCompleteTask from "./ButtonCompleteTask";
import TaskItem from "../TaskItem";

function TaskList({ dateTasks, dateCompleteFormat }) {
  const completeTasksInLocalStorage = localStorage.completeTasks
    ? JSON.parse(localStorage.completeTasks)
    : false;
  const [dateCompleteTasks, setDateCompleteTasks] = useState(
    completeTasksInLocalStorage
  );

  return (
    <ul className="w-100">
      {dateTasks.map((task, i) => {
        // Se corrobora si la tarea existe en la lista de tareas completas.
        const isComplete =
          dateCompleteTasks?.length >= 1 &&
          dateCompleteTasks.find((completeTask) => {
            return (
              completeTask.taskId === task.id &&
              completeTask.date === dateCompleteFormat
            );
          });

        return (
          <li
            key={task.id + "" + i}
            className="row m-0 border border-start-0 border-end-0 py-1 justify-content-center align-items-center"
          >
            <ButtonCompleteTask
              task={task}
              setCompleteTasks={setDateCompleteTasks}
              isComplete={isComplete}
              completeTasks={dateCompleteTasks}
              dateCompleteFormat={dateCompleteFormat}
            />
            <TaskItem task={task} />
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
