import dayjs from "dayjs";
import React from "react";

function SelectedDate({ dateSelected }) {
  // función para tomar los días entre las fechas.
  const dateNow = dayjs().startOf("day");
  const dayDiff = dateSelected.startOf("day").diff(dateNow, "day");
  dateSelected = dateSelected.format("DD/MM/YYYY");

  let daysToThatDate;

  if (dayDiff < 0) {
    switch (dayDiff) {
      case -1:
        daysToThatDate = "Ayer";
        break;
      case -2:
        daysToThatDate = "Antes de ayer";
        break;
      default:
        daysToThatDate = `Hace ${-1 * dayDiff} días`;
        break;
    }
  } else {
    switch (dayDiff) {
      case 0:
        daysToThatDate = "Hoy";
        break;
      case 1:
        daysToThatDate = "Mañana";
        break;
      case 2:
        daysToThatDate = "Pasado mañana";
        break;
      default:
        daysToThatDate = `Dentro de ${dayDiff} días`;
        break;
    }
  }

  return (
    <div className="ps-3 py-2">
      <p className="text-white">
        {dateSelected} - <span>{daysToThatDate}</span>
      </p>
    </div>
  );
}

export default SelectedDate;
