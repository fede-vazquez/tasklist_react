import React, { useEffect } from "react";
import { getOffSet, scrollToActiveItemX } from "../../utils/centerItemsInList";
import CompleteTasksDate from "./CompleteTasksDateDetail";

function DateInScrollBar({ date, newDate }) {
  const dateAbbreviation = date.format("ddd");
  const dateNumber = date.format("D");

  function selectItem() {
    setTimeout(() => {
      scrollToActiveItemX(
        ".active-date-item",
        "dates-list",
        getOffSet("#dates-list", ".active-date-item")
      );
    }, 10);

    // Cambia la fecha que se usa en los componentes.
    newDate(date.date(dateNumber));
  }

  useEffect(() => {
    setTimeout(() => {
      scrollToActiveItemX(
        ".active-date-item",
        "dates-list",
        getOffSet("#dates-list", ".active-date-item")
      );
    }, 10);
  }, []);

  return (
    <div className="position-relative text-center h-100">
      <div className="px-4 h-100 d-flex justify-content-center align-items-center flex-column">
        <p className="fs-7">{dateAbbreviation}</p>
        <p className="fs-4">{dateNumber}</p>

        {/* proximo icono que mostrará si un día
        tiene tareas para hacer */}
        <CompleteTasksDate
          weekDayNumber={date.day()}
          dateSelected={date.format("DD/MM/YYYY")}
        />
      </div>
      <div
        onClick={selectItem}
        className="position-absolute w-100 h-100 top-0"
      ></div>
    </div>
  );
}

export default DateInScrollBar;
