import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { saveData } from "../utils/saveData";
import { deleteItemById } from "../utils/deleteItemById";

function DateTaskList({ date }) {
  const dateCompleteFormat = date.format("DD/MM/YYYY");
  const dayNumber = Number(date.format("d"));
  // Maqueta de como se verán las tareas en el local storage.
  const tasks = localStorage.userTasks
    ? JSON.parse(localStorage.userTasks)
    : false;

  const completeTasksInLocalStorage = localStorage.completeTasks
    ? JSON.parse(localStorage.completeTasks)
    : false;

  const [completeTasks, setCompleteTasks] = useState(
    completeTasksInLocalStorage
  );

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

  // Función principal que maneja la activación o desactivación de un check.
  function handleChecked(e, taskId) {
    const containerInput = e.target.parentNode;
    if (!containerInput.classList.contains("circle-checkbox-active")) {
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
      className={`bg-2 d-flex align-items-center justify-content-center
    ${dateTasks?.length === 0 && " h-100"}`}
    >
      {tasks ? (
        dateTasks.length !== 0 ? (
          <ul className="w-100">
            {dateTasks.map((task, i) => {
              // Se corrobora si la tarea existe en la lista de tareas completas.
              const isComplete =
                completeTasks?.length >= 1 &&
                completeTasks.find((completeTask) => {
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
                  {/* Si la tarea esta completa, se agrega la clase que activa el circle-checkbox. */}
                  <div
                    className={`rounded-5 position-relative circle-checkbox d-flex justify-content-center align-items-center fw-bold
                  ${isComplete ? " circle-checkbox-active" : ""}`}
                  >
                    <i className="fa-solid fa-check"></i>
                    <div
                      className="position-absolute w-100 h-100"
                      onClick={(e) => {
                        handleChecked(e, task.id);
                      }}
                    ></div>
                  </div>
                  <TaskItem task={task} />
                </li>
              );
            })}
          </ul>
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
