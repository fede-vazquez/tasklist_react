import React, { useRef } from "react";
import DateInScrollBar from "./DateInScrollBar";
import dayjs from "dayjs";
import "dayjs/locale/es";

import useDayContext from "../../hooks/useDayContext";
dayjs.locale("es");

/** Componente que contiene la barra de navegación horizontal de los días del més. */
function DatesScrollBar() {
  const containerListRef = useRef();

  const { dateSelectedFormats, updateDate } = useDayContext();

  // Saca el primer y ultimo día del més actual
  const startMonth = dayjs()
    .month(dateSelectedFormats.monthNumber - 1)
    .startOf("month");
  const endMonth = dayjs()
    .month(dateSelectedFormats.monthNumber - 1)
    .endOf("month");

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
    <div className="px-2">
      <ul
        id="dates-list"
        ref={containerListRef}
        className="overflow-x-scroll d-flex align-items-end"
      >
        {/* prev month */}
        <li
          role="button"
          onClick={() => {
            updateDate(
              dayjs().month(dateSelectedFormats.monthNumber).startOf("month")
            );
          }}
          className="rounded-3 date-list-item d-flex justify-content-center align-items-center"
        >
          <i className="fa-solid fa-chevron-left fs-1"></i>
        </li>

        {dates.map((date, i) => {
          return (
            <li
              name={date.format("DD/MM/YYYY")}
              key={date.format("dddd") + i}
              className={`rounded-3 date-list-item 
              ${
                dateSelectedFormats.complete === date.format("DD/MM/YYYY")
                  ? "active-date-item bg-2 h-100"
                  : ""
              }`}
            >
              <DateInScrollBar
                containerListRef={containerListRef}
                date={date}
                newDate={updateDate}
              />
            </li>
          );
        })}
        {/* next month */}
        <li
          role="button"
          onClick={() => {
            updateDate(
              dayjs()
                .month(dateSelectedFormats.monthNumber + 1)
                .startOf("month")
            );
          }}
          className="rounded-3 date-list-item d-flex justify-content-center align-items-center"
        >
          <i className="fa-solid fa-chevron-right fs-1"></i>
        </li>
      </ul>
    </div>
  );
}

export default DatesScrollBar;
