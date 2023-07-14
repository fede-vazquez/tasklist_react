import React from "react";
import CheckedAllCheckboxesInput from "./CheckedAllCheckboxesInput";

const daysInWeek = [
  { dayId: 1, name: "Lunes" },
  { dayId: 2, name: "Martes" },
  { dayId: 3, name: "Miércoles" },
  { dayId: 4, name: "Jueves" },
  { dayId: 5, name: "Viernes" },
  { dayId: 6, name: "Sábado" },
  { dayId: 0, name: "Domingo" },
];

function DaysSelector({ handleMultipleCheckbox, daysSelected }) {
  return (
    <div className="my-2">
      <h2 className="fs-5">Días que se repite</h2>
      <ul className="d-flex justify-content-evenly">
        {daysInWeek.map((day) => (
          <li key={day.dayId}>
            <label
              htmlFor={`circle_checkbox_${day.name}`}
              role="button"
              className={`rounded-5 d-flex justify-content-center align-items-center fw-bold circle-checkbox
            ${
              daysSelected.some((daySelected) => daySelected.id === day.dayId)
                ? "circle-checkbox-active"
                : ""
            }`}
            >
              {day.name[0]}
            </label>

            <input
              id={`circle_checkbox_${day.name}`}
              className="btn-check"
              customattribute={day.name}
              type="checkbox"
              checked={daysSelected.some(
                (daySelected) => daySelected.id === day.dayId
              )}
              onChange={(e) => {
                handleMultipleCheckbox(
                  e.target,
                  "weekDaySelected",
                  day.dayId,
                  day.name
                );
              }}
            />
          </li>
        ))}
      </ul>

      {daysSelected.length === 0 && <p className="ms-2">No se repite</p>}

      <CheckedAllCheckboxesInput
        daysInWeek={daysInWeek}
        daysSelected={daysSelected}
        handleMultipleCheckbox={handleMultipleCheckbox}
      />
    </div>
  );
}

export default DaysSelector;
