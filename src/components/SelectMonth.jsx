import React, { useContext } from "react";
import dayjs from "dayjs";
import { scrollToActiveItemX, getOffSet } from "../utils/centerItemsInList";
import { DayContext } from "../contexts/DayContext";

function SelectMonth() {
  const monthList = [
    { monthNumber: 1, name: "Enero" },
    { monthNumber: 2, name: "Febrero" },
    { monthNumber: 3, name: "Marzo" },
    { monthNumber: 4, name: "Abril" },
    { monthNumber: 5, name: "Mayo" },
    { monthNumber: 6, name: "Junio" },
    { monthNumber: 7, name: "Julio" },
    { monthNumber: 8, name: "Agosto" },
    { monthNumber: 9, name: "Septiembre" },
    { monthNumber: 10, name: "Octubre" },
    { monthNumber: 11, name: "Noviembre" },
    { monthNumber: 12, name: "Diciembre" },
  ];
  const { updateDate, dateSelectedFormats } = useContext(DayContext);

  const selectMonth = (e) => {
    const selectedMonthObjet = monthList.find(
      (month) => month.name === e.target.innerText
    );

    const newDateSelected = dayjs()
      .month(selectedMonthObjet.monthNumber - 1)
      .set("date", 1);

    updateDate(newDateSelected);
  };

  function dateNow() {
    updateDate(dayjs());

    // Centra el día actual
    setTimeout(() => {
      scrollToActiveItemX(
        ".active-date-item",
        "dates-list",
        getOffSet("#dates-list", ".active-date-item")
      );
    }, 10);
  }

  return (
    <article className="d-flex justify-content-between mx-3">
      {/* selector para seleccionar el més al que se quiere ir */}
      <div className="dropdown bg-2 rounded-5 my-2">
        <button
          className="btn btn-secondary bg-transparent border-0"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {dateSelectedFormats.monthName}
          <i className="fa-solid fa-caret-down ps-1"></i>
        </button>
        <ul className="dropdown-menu dropdown-menu-dark p-0 bg-1 shadow">
          {monthList.map((month) => {
            return (
              <li
                key={month.monthNumber}
                onClick={selectMonth}
                className={`dropdown-item ${
                  month.name === dateSelectedFormats.monthName ? "d-none" : ""
                }`}
              >
                {month.name}
              </li>
            );
          })}
        </ul>
      </div>
      {/* botón para llevar al día actual */}
      <button
        onClick={dateNow}
        className="btn btn-secondary border-0 bg-2 rounded-5 my-2"
        type="button"
        aria-expanded="false"
      >
        hoy
      </button>
    </article>
  );
}

export default SelectMonth;
