import React from "react";

const daysInWeek = [
  { dayId: 1, name: "Lunes" },
  { dayId: 2, name: "Martes" },
  { dayId: 3, name: "Miércoles" },
  { dayId: 4, name: "Jueves" },
  { dayId: 5, name: "Viernes" },
  { dayId: 6, name: "Sábado" },
  { dayId: 7, name: "Domingo" },
];

function DaysSelector({ handleMultipleCheckbox }) {
  return (
    <div>
      {daysInWeek.map((day) => (
        <label key={day.dayId}>
          <input
            customattribute={day.name}
            type="checkbox"
            onChange={(e) =>
              handleMultipleCheckbox(e, "weekDaySelected", day.dayId)
            }
          />
          {day.name}
        </label>
      ))}
    </div>
  );
}

export default DaysSelector;
