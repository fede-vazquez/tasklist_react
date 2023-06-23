import React, { useRef } from "react";

function DaysSelector({ handleMultipleCheckbox }) {
  const allDaysSelected = useRef();

  const daysInWeek = [
    { dayId: 1, name: "Lunes" },
    { dayId: 2, name: "Martes" },
    { dayId: 3, name: "Miércoles" },
    { dayId: 4, name: "Jueves" },
    { dayId: 5, name: "Viernes" },
    { dayId: 6, name: "Sábado" },
    { dayId: 7, name: "Domingo" },
  ];

  function handleCheckedBackground(e) {
    const { checked } = e.target;
    const containerInput = e.target.parentNode;
    if (checked) {
      containerInput.classList.add("circle-checkbox-active");
    } else {
      containerInput.classList.remove("circle-checkbox-active");
    }
  }

  function checkedAllCheckbox(e) {
    daysInWeek.forEach((day, i) => {
      const inputDay = document.getElementById(`circle_checkbox_${day.name}`);

      // Si el check está activado, pone todo en true, en caso contrario lo coloca en false.
      inputDay.checked = e.target.checked ? true : false;

      // Crea un "evento" para que pueda las funciones puedan trabajar bien.
      const fakeEvent = {
        target: {
          checked: inputDay.checked,
          parentNode: inputDay.parentNode,
          getAttribute: () => {
            return day.name;
          },
        },
      };

      // Usa el handleChecked() para agregar o eliminar los días del form.
      // y el color de fondo.
      // El setTimeout es para una pequeña animación
      setTimeout(() => {
        handleCheckedBackground(fakeEvent);
        handleMultipleCheckbox(fakeEvent, "weekDaySelected", day.dayId);
      }, 30 * i);
    });
  }

  return (
    <div className="my-2">
      <h2 className="fs-5">Días que se repite</h2>
      <ul className="d-flex justify-content-evenly">
        {daysInWeek.map((day) => (
          <li
            key={day.dayId}
            className="rounded-5 circle-checkbox d-flex justify-content-center align-items-center fw-bold"
          >
            <label htmlFor={`circle_checkbox_${day.name}`}>{day.name[0]}</label>

            <input
              id={`circle_checkbox_${day.name}`}
              className="btn-check"
              customattribute={day.name}
              type="checkbox"
              onChange={(e) => {
                handleMultipleCheckbox(e, "weekDaySelected", day.dayId);
                handleCheckedBackground(e);
              }}
            />
          </li>
        ))}
      </ul>
      <div className="d-flex align-items-center justify-content-between px-2 form-switch pt-2">
        <label htmlFor="task_check_repeat_all_days">
          <p>Todos los días</p>
        </label>
        <input
          ref={allDaysSelected}
          id="task_check_repeat_all_days"
          className="form-check-input m-0"
          type="checkbox"
          role="switch"
          name="repeatAllDay"
          onChange={(e) => {
            checkedAllCheckbox(e);
          }}
        />
      </div>
    </div>
  );
}

export default DaysSelector;
