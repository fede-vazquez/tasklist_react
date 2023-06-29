import React from "react";
import TaskItem from "./TaskItem";

function DateTaskList({ date }) {
  const dateCompleteFormat = date.format("DD/MM/YYYY");
  const dayNumber = Number(date.format("d"));
  // Maqueta de como se verán las tareas en el local storage.
  const tasks = localStorage.userTasks
    ? JSON.parse(localStorage.userTasks)
    : false;
  let dateTasks;

  if (tasks) {
    dateTasks = tasks.filter((task) => {
      // Si la tarea se repite este día.
      const taskRepeatToday = task.weekDaySelected.some(
        (day) => day.id === dayNumber
      );

      // Si la tarea no se repite, pero es el mismo día.
      const taskOnlyThisDate =
        dateCompleteFormat === task.date && task.weekDaySelected.length === 0;

      return taskRepeatToday || taskOnlyThisDate;
    });
  }

  return (
    <div className="bg-2">
      {tasks && (
        <ul>
          {dateTasks.map((task, i) => {
            return (
              <li key={task.id + "" + i}>
                <TaskItem task={task} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default DateTaskList;
