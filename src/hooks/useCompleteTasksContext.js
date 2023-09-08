import { useContext } from "react";
import { CompleteTasksContext } from "../contexts/CompleteTasksContext";

/**
 * Contexto de las tareas completas del usuario.
 * @returns {{
 *   addCompleteTask: (taskId: String, date: String) => void
 *   removeCompleteTask: (taskId: String, date: String) => void
 *   isComplete: (taskId: String, dateSelected: String, weekDayNumber: Number) => Boolean
 *   allTasksDateComplete: (weekDayNumber: Number, dateSelected: String) => Boolean
 *   getDateCompleteTasks: (weekDayNumber: Number, dateSelected: String ) => Array
 * }} Retorna un objeto con métodos para ver y modificar las tareas completas del usuario.
 */
export default function useCompleteTasksContext() {
  return useContext(CompleteTasksContext);
}
