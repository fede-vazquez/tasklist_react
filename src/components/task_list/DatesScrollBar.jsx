import React from "react";

import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");

import DateInScrollBar from "./DateInScrollBar";

function DatesScrollBar({ selectedMonth }) {
  // Saca el més actual
  const month = dayjs().month();

  // Saca el primer y ultimo día del més actual
  const startMonth = dayjs().month(month).startOf("month");
  const endMonth = dayjs().month(month).endOf("month");

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

  return (
    <div className="overflow-x-auto text-white px-2">
      <ul className="d-flex">
        {dates.map((date, i) => {
          return (
            <li key={date.format("dddd") + i}>
              <DateInScrollBar date={date} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DatesScrollBar;
