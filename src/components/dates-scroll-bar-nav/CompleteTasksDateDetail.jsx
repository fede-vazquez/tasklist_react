import React from "react";
import useCompleteTasksContext from "../../hooks/useCompleteTasksContext";

/**
 * Linea debajo del número de cada día, que ayuda al usuario a saber si completo las tareas de un día específico.
 * @param {Number} weekDayNumber - Número del día en la semana.
 * @param {String} dateSelected - Formato de la fecha seleccionada. "DD/MM/YYYY"
 */
function CompleteTasksDate({ weekDayNumber, dateSelected }) {
  const { allTasksDateComplete } = useCompleteTasksContext();

  const allTasksDateAreComplete = allTasksDateComplete(
    weekDayNumber,
    dateSelected
  );

  return (
    <div
      className={`bg-2 position-absolute bottom-0 rounded-bottom-2 tasks-date-detail
    ${allTasksDateAreComplete ? "complete-tasks-date-detail" : ""}`}
    ></div>
  );
}

export default CompleteTasksDate;
