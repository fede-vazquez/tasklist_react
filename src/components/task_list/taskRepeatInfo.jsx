import React from "react";

function TaskRepeatInfo({ daysRepeat }) {
  let taskRepeatInfo = null;

  if (daysRepeat[0] === "no repeat") {
    taskRepeatInfo = "No se repite";
  } else if (daysRepeat[0] === "everyday") {
    taskRepeatInfo = "Todos los días";
  }

  const weekDays = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  return (
    <ul className="text-end pe-3 fs-7 d-flex justify-content-end gap-1">
      {taskRepeatInfo && <li>{taskRepeatInfo}</li>}

      {daysRepeat.length > 1 &&
        weekDays.map((day, i) => {
          return (
            <li
              key={day + i}
              className={
                (daysRepeat.includes(day) ? "" : "text-secondary") + " fw-bold"
              }
            >
              {day[0]}
            </li>
          );
        })}
    </ul>
  );
}

export default TaskRepeatInfo;
