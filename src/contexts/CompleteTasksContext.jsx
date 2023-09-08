import React, { createContext, useState } from "react";
import useTasksContext from "../hooks/useTasksContext";
import { saveData } from "../utils/saveData";
import { deleteItemById } from "../utils/deleteItemById";

/**
 * Contexto de las tareas completas del usuario.
 * @property {function} addCompleteTask - Marca como completa una tarea.
 * @property {function} removeCompleteTask - Marca como incompleta una tarea.
 * @property {function} isComplete - Devuelve un booleano que dice si la tarea esta completa o no.
 * @property {function} allTasksDateComplete - Devuelve un booleano dependiendo si se completaron todas las tareas de un día.
 * @property {function} getDateCompleteTasks - Devuelve un array con todas las tareas completas de un día.
 *
 * Para una fácil implementación de este contexto, existe un hook
 * que agrega más información de como utilizar cada función.
 *
 * El archivo del hook esta dentro de la carpeta "hooks" y se llama "useCompleteTasksContext.js".
 */
const CompleteTasksContext = createContext();

/** Proveedor del contexto de tareas completas del usuario. */
function CompleteTaskContextProvider({ children }) {
  const completeTasksInStorage = localStorage.completeTasks
    ? JSON.parse(localStorage.completeTasks)
    : false;

  const [completeTasksInState, setCompleteTasksInState] = useState(
    completeTasksInStorage
  );

  const { getDateTasks } = useTasksContext();

  function getDateCompleteTasks(weekDayNumber, dateSelected) {
    const dateSelectedTasks = getDateTasks(weekDayNumber, dateSelected);

    return dateCompleteTasks(
      dateSelectedTasks,
      completeTasksInState,
      dateSelected
    );
  }

  function isComplete(taskId, dateSelected, weekDayNumber) {
    const dateCompleteTasks = getDateCompleteTasks(weekDayNumber, dateSelected);

    return dateCompleteTasks.some((completeTask) => {
      return (
        completeTask.taskId === taskId && completeTask.date === dateSelected
      );
    });
  }

  function allTasksDateComplete(weekDayNumber, dateSelected) {
    const dateTasks = getDateTasks(weekDayNumber, dateSelected);
    const completeDateTasks = getDateCompleteTasks(weekDayNumber, dateSelected);

    return (
      dateTasks.length === completeDateTasks.length &&
      dateTasks.length > 0 &&
      completeDateTasks.length > 0
    );
  }

  function addCompleteTask(taskId, date) {
    const taskComplete = {
      taskId,
      date,
    };
    saveData("completeTasks", taskComplete);
    setCompleteTasksInState(JSON.parse(localStorage.completeTasks));
  }

  function removeCompleteTask(taskId, date) {
    if (completeTasksInState?.length >= 1) {
      const taskCompleteToRemove = completeTasksInState.find((taskComplete) => {
        return taskComplete.taskId === taskId && taskComplete.date === date;
      });

      deleteItemById(
        taskCompleteToRemove.id,
        completeTasksInState,
        "completeTasks"
      );
      setCompleteTasksInState(JSON.parse(localStorage.completeTasks));
    }
  }

  return (
    <CompleteTasksContext.Provider
      value={{
        getDateCompleteTasks,
        addCompleteTask,
        removeCompleteTask,
        isComplete,
        allTasksDateComplete,
      }}
    >
      {children}
    </CompleteTasksContext.Provider>
  );
}

function dateCompleteTasks(dateSelectedTasks, completeTasks) {
  // Ver si hay tareas completas de ese día y filtrarlas..

  const completeDateTasks = completeTasks.filter((completeTask) => {
    const taskComplete = dateSelectedTasks.find((task) => {
      return completeTask.taskId === task.id && completeTask.date === task.date;
    });

    return taskComplete;
  });

  return completeDateTasks;
}

export { CompleteTaskContextProvider, CompleteTasksContext };
