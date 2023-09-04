import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

/**
 * Contexto de las tareas del usuario.
 * @returns {{
 *   tasks: Array<Object>,
 *   saveTask: (task: Object) => void,
 *   updateTask: (taskId: string, newData: Object) => void,
 *   deleteTask: (idToRemove: String, array: Array, localStorageArrayName: String ) => void,
 *   getDateTasks: () => Array<Object>
 * }} Retorna un objeto con métodos para ver, modificar, eliminar y crear tareas.
 */
export default function useTasksContext() {
  return useContext(TasksContext);
}
