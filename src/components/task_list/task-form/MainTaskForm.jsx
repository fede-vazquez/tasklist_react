import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

function MainTaskForm() {
  const navigate = useNavigate();
  const { form, errors, handleChanges } = useForm({});

  function submitForm(formValues) {
    const validations = "";
    if (validations) {
      // código para que se guarde la tarea.

      navigate("/tasklist");
    } else {
      // código que se ejecuta si hay algún error.
    }
  }

  return (
    <section>
      <form className="col-10 m-auto py-4">
        <label className="w-100 my-2">
          <input
            onChange={(e) => handleChanges(e)}
            className="w-100 p-2 border-0 rounded-2"
            type="text"
            name="title"
            placeholder="Título"
            value={form.title || ""}
          />
        </label>

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
          <label htmlFor="task_check_day">
            <p>Day</p>
          </label>
          <input
            id="task_check_day"
            className="form-check-input m-0"
            type="checkbox"
            role="switch"
            name="select-this-date"
          />
        </div>

        <label className="w-100 my-2">
          <input
            onChange={(e) => handleChanges(e)}
            className="w-100 p-2 border-0 rounded-2"
            type="text"
            name="genre"
            placeholder="Genero"
            value={form.genre || ""}
          />
        </label>

        <label className="w-100 my-2">
          <textarea
            onChange={(e) => handleChanges(e)}
            className="w-100 border-0 rounded-2"
            name="description"
            placeholder="descripción"
            value={form.description || ""}
          ></textarea>
        </label>

        <div
          to={"/tasklist"}
          onClick={() => submitForm(form)}
          className="text-center my-3"
        >
          <i className="fa-solid btn-1 bg-2 py-3 rounded-3 fa-plus col-11"></i>
        </div>
      </form>
    </section>
  );
}

export default MainTaskForm;
