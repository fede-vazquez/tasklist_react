import React from "react";

function DateInScrollBar({ date }) {
  const dateInitial = date.format("dddd")[0].toUpperCase();
  const dateNumber = date.format("D");
  return (
    <div className="px-3 py-1 pointer text-center bg-2 rounded pe-auto mx-2">
      <p className="fs-7">{dateInitial}</p>
      <p className="fs-4">{dateNumber}</p>
      {/* proximo icono que mostrará si un día
        tiene tareas para hacer */}
      <i className="fa-solid fa-circle-check fs-6"></i>
    </div>
  );
}

export default DateInScrollBar;
