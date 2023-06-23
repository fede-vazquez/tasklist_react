import React, { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { validationsTaskForm } from "../../../validations/validationsTaskList";
import { useNavigate } from "react-router-dom";
import DaysSelector from "./DaysSelector";

const initialForm = {
  title: "",
  hour: "00:00",
  description: "",
  genre: "",
  allDay: false,
  weekDaySelected: [],
};

function MainTaskForm() {
  const navigate = useNavigate();

  const {
    form,
    errors,
    handleChanges,
    handleBlur,
    handleCheckbox,
    handleMultipleCheckbox,
    onSubmit,
  } = useForm(initialForm, validationsTaskForm);

  const [switchRender, setSetSwitchRender] = useState(false);

  function onSubmitAndRedirect() {
    onSubmit();
    console.log(form);
    if (Object.keys(errors).length === 0) {
      // Lógica que cree la tarea en el localStorage.
      navigate("/tasklist");
    }
    // Cambia el valor del estado "switchRender".
    // para volver a cargar el componente y lograr ver los mensajes de error.
    setSetSwitchRender(!switchRender);
  }

  return (
    <section>
      <form className="col-10 m-auto py-4">
        <label className="w-100 my-2">
          <input
            onChange={(e) => handleChanges(e)}
            onBlur={(e) => handleBlur(e)}
            className="w-100 p-2 border-0 rounded-2"
            type="text"
            name="title"
            placeholder="Título"
            value={form.title}
          />
        </label>
        {errors?.title && <p className="text-error">{errors.title.msg}</p>}

        <div className="task_hour_contain_input pb-3">
          <label htmlFor="Task_hour">
            Horario:
            <span className="fs-xxl task_hour_text d-block lh-1">
              {form.hour || "00:00"}
            </span>
          </label>
          <input
            onChange={(e) => handleChanges(e)}
            className="visually-hidden task_hour_input"
            type="time"
            name="hour"
            id="Task_hour"
            value={form.hour || "00:00"}
          />
        </div>

        <div className="d-flex align-items-center justify-content-between px-2 form-switch w-100">
          <label htmlFor="task_check_all_day">
            <p>Todo el día</p>
          </label>
          <input
            onChange={(e) => handleCheckbox(e)}
            id="task_check_all_day"
            className="form-check-input m-0"
            type="checkbox"
            role="switch"
            name="allDay"
            checked={form.allDay}
          />
        </div>

        <DaysSelector
          handleMultipleCheckbox={handleMultipleCheckbox}
          daysSelected={form.weekDaySelected}
        />

        <label className="w-100 my-2">
          <input
            onChange={(e) => handleChanges(e)}
            onBlur={(e) => handleBlur(e)}
            className="w-100 p-2 border-0 rounded-2"
            type="text"
            name="genre"
            placeholder="Genero"
            value={form.genre}
          />
        </label>
        {errors?.genre && <p className="text-error">{errors.genre.msg}</p>}

        <label className="w-100 my-2">
          <textarea
            onChange={(e) => handleChanges(e)}
            className="w-100 border-0 rounded-2"
            name="description"
            placeholder="descripción"
            value={form.description}
          ></textarea>
        </label>

        <div
          to={"/tasklist"}
          onClick={() => onSubmitAndRedirect(form)}
          className="text-center my-3"
        >
          <i className="fa-solid btn-1 bg-2 py-3 rounded-3 fa-plus col-11"></i>
        </div>
      </form>
    </section>
  );
}

export default MainTaskForm;
