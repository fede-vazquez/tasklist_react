import React from "react";

function CheckedAllCheckboxesInput({
  daysInWeek,
  handleMultipleCheckbox,
  daysSelected,
}) {
  function checkedAllCheckbox(e) {
    const checkedAllCheckbox = e.target.checked;

    daysInWeek.forEach((day, i) => {
      const inputDay = document.getElementById(`circle_checkbox_${day.name}`);

      // En el caso de que los checked de inputDay y e.target estén activos,
      // hace un return temprano para que no se ejecute el código siguiente,
      // para que no agregue nuevamente el mismo día..
      if (inputDay.checked && checkedAllCheckbox) {
        return;
      }

      // El setTimeout es para una pequeña animación.
      setTimeout(() => {
        // Si el check está activado, pone todo en true, en caso contrario lo coloca en false.
        inputDay.checked = checkedAllCheckbox;

        // Usa el handleChecked() para agregar o eliminar los días del form.
        // y el color de fondo.
        handleMultipleCheckbox(
          inputDay,
          "weekDaySelected",
          day.dayId,
          day.name
        );
      }, 30 * i);
    });
  }

  return (
    <div className="d-flex align-items-center justify-content-between px-2 form-switch pt-2">
      <label htmlFor="task_check_repeat_all_days">
        <p>Todos los días</p>
      </label>
      <input
        id="task_check_repeat_all_days"
        className="form-check-input m-0"
        type="checkbox"
        role="switch"
        name="repeatAllDay"
        onChange={(e) => {
          checkedAllCheckbox(e);
        }}
        checked={daysSelected.length === 7}
      />
    </div>
  );
}

export default CheckedAllCheckboxesInput;
