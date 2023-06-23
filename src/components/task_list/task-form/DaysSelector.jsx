import React from "react";
import CheckedAllCheckboxesInput from "./CheckedAllCheckboxesInput";

const daysInWeek = [
  { dayId: 1, name: "Lunes" },
  { dayId: 2, name: "Martes" },
  { dayId: 3, name: "Miércoles" },
  { dayId: 4, name: "Jueves" },
  { dayId: 5, name: "Viernes" },
  { dayId: 6, name: "Sábado" },
  { dayId: 7, name: "Domingo" },
];

function handleCheckedBackground(e) {
  const { checked } = e.target;
  const containerInput = e.target.parentNode;
  if (checked) {
    containerInput.classList.add("circle-checkbox-active");
  } else {
    containerInput.classList.remove("circle-checkbox-active");
  }
}

function DaysSelector({ handleMultipleCheckbox }) {
  const allDaysSelected = document.getElementById("task_check_repeat_all_days");

  return (
    <div className="my-2">
      <h2 className="fs-5">Días que se repite</h2>
      <ul className="d-flex justify-content-evenly">
        {daysInWeek.map((day) => (
          <li
            key={day.dayId}
            className="rounded-5 circle-checkbox d-flex justify-content-center align-items-center fw-bold"
          >
            <label htmlFor={`circle_checkbox_${day.name}`}>{day.name[0]}</label>

            <input
              id={`circle_checkbox_${day.name}`}
              className="btn-check"
              customattribute={day.name}
              type="checkbox"
              onChange={(e) => {
                if (!allDaysSelected?.checked) {
                  handleMultipleCheckbox(e, "weekDaySelected", day.dayId);
                  handleCheckedBackground(e);
                }
              }}
            />
          </li>
        ))}
      </ul>
      <CheckedAllCheckboxesInput
        daysInWeek={daysInWeek}
        handleCheckedBackground={handleCheckedBackground}
        handleMultipleCheckbox={handleMultipleCheckbox}
      />
    </div>
  );
}

export default DaysSelector;
