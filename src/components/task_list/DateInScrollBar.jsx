import React from "react";

function DateInScrollBar({ date }) {
  const dateAbbreviation = date.format("ddd");
  const dateNumber = date.format("D");

  function centerItemInMiddle(itemSelected) {
    document.querySelectorAll(".date-list-item").forEach((item) => {
      if (item.classList.contains("active-date-item")) {
        item.classList.remove("active-date-item");
      }
    });

    itemSelected.target.parentNode.parentNode.classList.add("active-date-item");
  }

  return (
    <div className="position-relative text-center h-100">
      <div className="px-4 h-100 d-flex justify-content-center flex-column">
        <p className="fs-7">{dateAbbreviation}</p>
        <p className="fs-4">{dateNumber}</p>
        {/* proximo icono que mostrará si un día
        tiene tareas para hacer */}
        <i className="fa-solid fa-circle-check fs-6 pb-1"></i>
      </div>
      <div
        onClick={centerItemInMiddle}
        className="position-absolute w-100 h-100 top-0"
      ></div>
    </div>
  );
}

export default DateInScrollBar;
