import React from "react";
import TaskList from "./TaskList";

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
    <div
      className={`bg-2 d-flex align-items-center justify-content-center
    ${dateTasks?.length === 0 && " h-100"}`}
    >
      {tasks ? (
        dateTasks.length !== 0 ? (
          <TaskList
            dateTasks={dateTasks}
            dateCompleteFormat={dateCompleteFormat}
          />
        ) : (
          <p className="fs-3 py-3">No hay tareas para este día.</p>
        )
      ) : (
        <p className="fs-3 py-3">Todavía no creaste tareas.</p>
      )}
    </div>
  );
}

export default DateTaskList;
