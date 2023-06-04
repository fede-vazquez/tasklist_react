import React from "react";

function SelectedDate({ dateSelected }) {
  // función para tomar los días entre las fechas.
  const daysToThatDate = "dentro de x días";
  dateSelected = dateSelected.format("DD/MM/YYYY");
  return (
    <div className="ps-3 py-2">
      <p className="text-white">
        {dateSelected} - <span>{daysToThatDate}</span>
      </p>
    </div>
  );
}

export default SelectedDate;
