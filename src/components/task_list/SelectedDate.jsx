import React from "react";

function SelectedDate({ dateSelected }) {
  // función para tomar los días entre las fechas.
  const daysToThatDate = "dentro de x días";
  return (
    <div className="ps-3 pb-2">
      <p className="text-white">
        {dateSelected} - <span>{daysToThatDate}</span>
      </p>
    </div>
  );
}

export default SelectedDate;
