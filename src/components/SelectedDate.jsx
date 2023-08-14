import React, { useContext } from "react";
import dayjs from "dayjs";
import { DayContext } from "../contexts/DayContext";

/**
 * Componente que muestra información del día seleccionado.
 */
function SelectedDate() {
  const { complete: dateCompleteFormat } =
    useContext(DayContext).dateSelectedFormats;

  // Saca la diferencia de días entre el día seleccionado y el día actual.
  const dateNow = dayjs().startOf("day");
  const dayDiff = dayjs(dateCompleteFormat, "DD/MM/YYYY").diff(dateNow, "day");

  let daysToThatDate;
  // Condicionales para mostrar una u otra información dependiendo del resultado de la diferencia de días.
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
    <div className="ps-3 py-2 text-md-center">
      <p>
        {dateCompleteFormat} - <span>{daysToThatDate}</span>
      </p>
    </div>
  );
}

export default SelectedDate;
