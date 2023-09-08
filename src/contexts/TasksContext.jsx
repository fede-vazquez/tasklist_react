import React, { createContext, useState } from "react";
import { saveData } from "../utils/saveData";
import { updateData } from "../utils/updateData";
import useDayContext from "../hooks/useDayContext";
import { deleteItemById } from "../utils/deleteItemById";

/**
 * Contexto de las tareas del usuario.
 * @property {Array<Object>} tasks - Contiene todas las tareas del usuario.
 * @property {function} saveTask - Guarda una tarea en el estado y en el localStorage.
 * @property {function} updateTask - Actualiza una tarea específica.
 * @property {function} getDateTasks - Recupera todas las tareas de un día específico.
 * @property {function} deleteTask - Elimina una tarea específica por su id.
 *
 * Para una fácil implementación de este contexto, existe un hook
 * que agrega más información de como utilizar cada función.
 *
 * El archivo del hook esta dentro de la carpeta "hooks" y se llama "useTasksContext.js".
 */
const TasksContext = createContext();

/**Proveedor del contexto de tareas.*/
function TasksContextProvider({ children }) {
  const { complete: dateSelected, weekDayNumber } =
    useDayContext().dateSelectedFormats;

  const tasksInStorage = localStorage.userTasks
    ? JSON.parse(localStorage.userTasks)
    : false;

  const [tasksInState, setTasksInState] = useState(tasksInStorage);
  function saveTask(newTask) {
    saveData("userTasks", newTask);
    setTasksInState(JSON.parse(localStorage.userTasks));
  }

  function updateTask(idToUpdate, newTaskData) {
    updateData("userTasks", idToUpdate, newTaskData);
    setTasksInState(JSON.parse(localStorage.userTasks));
  }

  function deleteTask(idToDelete) {
    deleteItemById(idToDelete, tasksInState, "userTasks");
    setTasksInState(JSON.parse(localStorage.userTasks));
  }

  function getDateTasks(weekDayNumber, dateSelected) {
    return filterDateTasksList(tasksInState, weekDayNumber, dateSelected);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks: tasksInState,
        saveTask,
        getDateTasks,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

/**
 * Función para filtrar las tareas de un día, ya sea porque se repite ese día o porque es unicamente el mismo.
 * @param {Array} tasksToFilter Lista de tareas que se va a filtrar.
 * @param {Number} weekDayNumber Número del día de la semana.
 * @param {String} dateSelected Fecha exacta que se quiere ver.
 * @returns {Array} Retorna un array con las tareas filtradas.
 */
function filterDateTasksList(tasksToFilter, weekDayNumber, dateSelected) {
  if (tasksToFilter) {
    return tasksToFilter.filter((task) => {
      // Si la tarea se repite este día.
      const taskRepeatToday = task.weekDaySelected.some(
        (day) => day.id === Number(weekDayNumber)
      );

      // Si la tarea no se repite, pero es el mismo día.
      const taskOnlyThisDate =
        dateSelected === task.date && task.weekDaySelected.length === 0;

      return taskRepeatToday || taskOnlyThisDate;
    });
  }
  return [];
}

export { TasksContextProvider, TasksContext };
