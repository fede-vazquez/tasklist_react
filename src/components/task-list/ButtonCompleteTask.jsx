import React from "react";

import useCompleteTasksContext from "../../hooks/useCompleteTasksContext";

/**
 * Botón para marcar como completa o incompleta una tarea.
 * @param {String} taskId : Id de la tarea.
 * @param {String} dateCompleteFormat : Formato "DD/MM/YYYY" del día que sea la tarea.
 * @param {Number} weekDayNumber : Numero del día en la semana.
 */
function ButtonCompleteTask({ taskId, dateCompleteFormat, weekDayNumber }) {
  const { addCompleteTask, removeCompleteTask, isComplete } =
    useCompleteTasksContext();

  const isTaskComplete = isComplete(taskId, dateCompleteFormat, weekDayNumber);

  function handleChecked(taskId) {
    if (!isTaskComplete) {
      addCompleteTask(taskId, dateCompleteFormat);
    } else {
      removeCompleteTask(taskId, dateCompleteFormat);
    }
  }

  return (
    <div
      role="button"
      className={`rounded-5 position-relative circle-checkbox d-flex justify-content-center align-items-center fw-bold
      ${isTaskComplete ? " circle-checkbox-active" : ""}`}
    >
      <i className="fa-solid fa-check"></i>
      <div
        className="position-absolute w-100 h-100"
        onClick={() => {
          handleChecked(taskId);
        }}
      ></div>
    </div>
  );
}

export default ButtonCompleteTask;
