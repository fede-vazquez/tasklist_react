import React from "react";
import DateInScrollBar from "./DateInScrollBar";

import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");

function DatesScrollBar({ selectedMonth, dateSelected, newDate }) {
  // Saca el primer y ultimo día del més actual
  const startMonth = dayjs().month(selectedMonth).startOf("month");
  const endMonth = dayjs().month(selectedMonth).endOf("month");

  // Variable que irá cambiando, con el valor inicial del més actual
  let oneDay = startMonth;

  // Array donde se irán guardando los días.
  const dates = [];

  // While que agrega el día y agrega un día más a la fecha de "oneDay"
  // Siempre y cuando la fecha del "oneDay" no sea mayor o igual al "endMonth".
  while (oneDay.isSame(endMonth) || oneDay.isBefore(endMonth)) {
    dates.push(oneDay);
    oneDay = oneDay.add(1, "day");
  }

  function selectNewDate(newDateSelected) {
    newDate(newDateSelected);
  }

  return (
    <div className="text-white px-2 overflow-x-auto">
      <ul className="date-list-container d-flex align-items-end">
        {dates.map((date, i) => {
          return (
            <li
              className={`rounded-3 date-list-item 
              ${dateSelected.date() === date.date() ? "active-date-item" : ""}`}
              key={date.format("dddd") + i}
            >
              <DateInScrollBar date={date} newDate={selectNewDate} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DatesScrollBar;
