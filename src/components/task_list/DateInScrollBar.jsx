import React, { useEffect, useRef } from "react";

function DateInScrollBar({ date, newDate, containerListRef }) {
  const dateAbbreviation = date.format("ddd");
  const dateNumber = date.format("D");

  const thisItemListRef = useRef();

  function selectItem() {
    // Probando
    setTimeout(() => {
      centerItem();
    }, 10);

    // Agrega la clase para "activar" uno de los items
    // y elimina las clase de los demás.
    activeItem(containerListRef.current);

    // Cambia la fecha que se usa en los componentes.
    newDate(date.date(dateNumber));
  }

  useEffect(() => {
    const itemActive =
      thisItemListRef.current.parentNode.classList.contains("active-date-item");
    setTimeout(() => {
      if (itemActive) {
        centerItem();
      }
    }, 50);
  }, []);

  return (
    <div ref={thisItemListRef} className="position-relative text-center h-100">
      <div className="px-4 h-100 d-flex justify-content-center flex-column">
        <p className="fs-7">{dateAbbreviation}</p>
        <p className="fs-4">{dateNumber}</p>
        {/* proximo icono que mostrará si un día
        tiene tareas para hacer */}
        <i className="fa-solid fa-circle-check fs-6"></i>
      </div>
      <div
        onClick={selectItem}
        className="position-absolute w-100 h-100 top-0"
      ></div>
    </div>
  );

  // Agrega la clase "active-date-item".
  function activeItem(container) {
    const itemSelected = container.querySelector(".active-date-item");
    document.querySelectorAll(".date-list-item").forEach((item) => {
      if (item.classList.contains("active-date-item")) {
        item.classList.remove("active-date-item");
      }
    });
    itemSelected.classList.add("active-date-item");
  }

  // Centra el elemento.
  function centerItem() {
    const container = containerListRef.current;
    if (container) {
      // Verificación adicional
      const itemSelected = container.querySelector(".active-date-item");
      if (itemSelected) {
        const containerWidth = container.offsetWidth;
        const itemWidth = itemSelected.offsetWidth;
        const itemOffsetLeft = itemSelected.offsetLeft;
        const scrollLeft = itemOffsetLeft - (containerWidth - itemWidth) / 2;

        // Si el item esta a la derecha
        if (container.scrollLeft < scrollLeft) {
          const differentSpace = -1 * (container.scrollLeft - scrollLeft);
          for (let i = 1; i <= differentSpace; i++) {
            setTimeout(() => {
              container.scrollLeft = container.scrollLeft + 1;
            }, i * 2.5);
          }
        }

        // Si el item esta a la izquierda
        if (container.scrollLeft > scrollLeft) {
          const differentSpace = container.scrollLeft - scrollLeft;
          for (let i = 1; i <= differentSpace; i++) {
            setTimeout(() => {
              container.scrollLeft = container.scrollLeft - 1;
            }, i * 2.5);
          }
        }
        setTimeout(() => {}, 1000);
      }
    }
  }
}

export default DateInScrollBar;
