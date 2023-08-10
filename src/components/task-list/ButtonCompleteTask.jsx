import React from "react";

import { saveData } from "../../utils/saveData";
import { deleteItemById } from "../../utils/deleteItemById";

function ButtonCompleteTask({
  task,
  setCompleteTasks,
  completeTasks,
  isComplete,
  dateCompleteFormat,
}) {
  // Función principal que maneja la activación o desactivación de un check.
  function handleChecked(taskId) {
    if (!isComplete) {
      saveCompleteTask(taskId);
    } else {
      removeCompleteTask(taskId);
    }

    // Guarda en el estado el nuevo array del localStorage.
    setCompleteTasks(JSON.parse(localStorage.completeTasks));
  }

  // Guarda la tarea completa en el localStorage
  function saveCompleteTask(taskId) {
    const dataToSave = {
      taskId: taskId,
      date: dateCompleteFormat,
    };
    saveData("completeTasks", dataToSave);
  }

  // Elimina la tarea completa del localStorage
  function removeCompleteTask(taskId) {
    if (completeTasks?.length >= 1) {
      const taskCompleteToRemove = completeTasks.find((taskComplete) => {
        return (
          taskComplete.taskId === taskId &&
          taskComplete.date === dateCompleteFormat
        );
      });

      deleteItemById(taskCompleteToRemove.id, completeTasks, "completeTasks");
    }
  }

  return (
    <div
      role="button"
      className={`rounded-5 position-relative circle-checkbox d-flex justify-content-center align-items-center fw-bold
      ${isComplete ? " circle-checkbox-active" : ""}`}
    >
      <i className="fa-solid fa-check"></i>
      <div
        className="position-absolute w-100 h-100"
        onClick={() => {
          handleChecked(task.id);
        }}
      ></div>
    </div>
  );
}

export default ButtonCompleteTask;
