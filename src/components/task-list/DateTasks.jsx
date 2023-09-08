import React from "react";
import TaskList from "./TaskList";
import useTasksContext from "../../hooks/useTasksContext";
import useDayContext from "../../hooks/useDayContext";

/** Componente que carga la lista de tareas del día seleccionado.*/
function DateTaskList() {
  const { complete: dateCompleteFormat, weekDayNumber } =
    useDayContext().dateSelectedFormats;

  const dateTasks = useTasksContext().getDateTasks(
    weekDayNumber,
    dateCompleteFormat
  );

  return (
    <div
      className={`bg-2 d-flex align-items-center justify-content-center
    ${dateTasks?.length === 0 && " h-100"}`}
    >
      {dateTasks.length !== 0 ? (
        <TaskList
          weekDayNumber={weekDayNumber}
          dateTasks={dateTasks}
          dateCompleteFormat={dateCompleteFormat}
        />
      ) : (
        <p className="fs-3 py-3">No hay tareas para este día.</p>
      )}
    </div>
  );
}

export default DateTaskList;
