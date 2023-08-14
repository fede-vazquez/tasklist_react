import React, { useContext } from "react";
import TaskList from "./TaskList";
import { DayContext } from "../../contexts/DayContext";

/**
 * Componente que carga la lista de tareas del día seleccionado.
 */
function DateTaskList() {
  const tasks = localStorage.userTasks
    ? JSON.parse(localStorage.userTasks)
    : false;

  const { weekDayNumber, complete: dateCompleteFormat } =
    useContext(DayContext).dateSelectedFormats;

  let dateTasks;
  // Condición para filtrar las tareas del día si es que existen.
  if (tasks) {
    dateTasks = tasks.filter((task) => {
      // Si la tarea se repite este día.
      const taskRepeatToday = task.weekDaySelected.some(
        (day) => day.id === Number(weekDayNumber)
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
