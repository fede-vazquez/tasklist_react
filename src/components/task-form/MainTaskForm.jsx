import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { validationsTaskForm } from "../../validations/validationsTaskList";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DaysSelector from "./DaysSelector";
import GenreInput from "./GenreInput";
import { getQueryParams } from "../../utils/getQueryParams";
import { findItemInArray } from "../../utils/findItemById";
import useTasksContext from "../../hooks/useTasksContext";

function MainTaskForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = getQueryParams(location.search, ["date", "task"]);

  const { saveTask, updateTask } = useTasksContext();

  let initialForm = {
    title: "",
    hour: "00:00",
    description: "",
    genre: "",
    allDay: false,
    weekDaySelected: [],
  };

  // Si la url incluye "/edit" significa que es un formulario para editar.
  const isEditForm = Boolean(location.pathname.includes("/edit"));

  // Controlador para formulario de edición.
  if (isEditForm) {
    initialForm = findItemInArray(
      params.task,
      JSON.parse(localStorage.getItem("userTasks"))
    );
  }

  const {
    form,
    errors,
    handleChanges,
    handleBlur,
    handleCheckbox,
    handleMultipleCheckbox,
    onSubmit,
  } = useForm(initialForm, validationsTaskForm);

  const [switchRender, setSwitchRender] = useState(false);

  function onSubmitAndRedirect() {
    onSubmit();
    if (Object.keys(errors).length === 0) {
      // Lógica que cree la tarea en el localStorage.
      if (!isEditForm) {
        saveTask({
          title: form.title,
          hour: form.hour,
          description: form.description,
          date: params.date,
          genre: form.genre,
          allDay: form.allDay,
          weekDaySelected: form.weekDaySelected,
        });
      }

      // Lógica para actualizar la tarea.
      if (isEditForm) {
        updateTask(params.task, {
          id: initialForm.id,
          title: form.title,
          hour: form.hour,
          description: form.description,
          date: initialForm.date,
          genre: form.genre,
          allDay: form.allDay,
          weekDaySelected: form.weekDaySelected,
        });
      }

      navigate("/");
    }
    // Cambia el valor del estado "switchRender".
    // para volver a cargar el componente y lograr ver los mensajes de error.
    setSwitchRender(!switchRender);
  }

  return (
    <section className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto mt-md-5">
      <form className="m-auto py-2 px-4">
        <Link
          to={"/"}
          className="mx-2 mx-md-0 mt-5 bg-2 px-4 py-3 btn-1 rounded-5"
        >
          <i className="fa-solid fa-chevron-left fs-5 my-3"></i>
        </Link>
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

        <GenreInput
          handleChanges={handleChanges}
          handleBlur={handleBlur}
          form={form}
        />

        {errors?.genre && <p className="text-error">{errors.genre.msg}</p>}

        <label className="w-100 my-2">
          <textarea
            onChange={(e) => handleChanges(e)}
            className="w-100 border-0 rounded-2 p-1"
            name="description"
            placeholder="Descripción"
            value={form.description}
          ></textarea>
        </label>

        <div
          to={"/"}
          onClick={() => onSubmitAndRedirect(form)}
          role="button"
          className="text-center my-3"
        >
          <i className="fa-solid btn-1 bg-2 py-3 rounded-3 fa-plus col-11"></i>
        </div>
      </form>
    </section>
  );
}

export default MainTaskForm;
