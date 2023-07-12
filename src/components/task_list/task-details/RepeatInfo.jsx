import React from "react";

function RepeatInfo({ task }) {
  const repeatDays = task.weekDaySelected;

  let textRepeatInfo;

  switch (repeatDays.length) {
    case 0:
      textRepeatInfo = `Solo el día: ${task.date}`;
      break;
    case 7:
      textRepeatInfo = "Todos los días";
      break;

    default:
      textRepeatInfo = "Se repite";
      break;
  }

  const daysInWeek = [
    { dayId: 1, name: "Lunes" },
    { dayId: 2, name: "Martes" },
    { dayId: 3, name: "Miércoles" },
    { dayId: 4, name: "Jueves" },
    { dayId: 5, name: "Viernes" },
    { dayId: 6, name: "Sábado" },
    { dayId: 0, name: "Domingo" },
  ];

  return (
    <div className="mt-4">
      <h6>{textRepeatInfo}</h6>
      <ul className="d-flex justify-content-evenly">
        {daysInWeek.map((day) => (
          <li
            key={day.dayId}
            className={`
            ${
              repeatDays.some((obj) => obj.id === day.dayId)
                ? "circle-checkbox-active"
                : ""
            }
            rounded-5 circle-checkbox d-flex justify-content-center align-items-center fw-bold`}
          >
            <p>{day.name[0]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepeatInfo;
