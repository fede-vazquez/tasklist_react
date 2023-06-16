import React, { useState } from "react";

function MainTaskForm() {
  const [form, setForm] = useState({});

  function handleChanges(e) {
    const eventInputName = e.target.name;
    const eventValue = e.target.value;
    console.log(eventInputName + " " + eventValue);
    setForm({
      ...form,
      [eventInputName]: eventValue,
    });
  }

  return (
    <section>
      <form className="col-10 m-auto py-4">
        <label className="w-100 my-2">
          <input
            className="w-100 p-2 border-0 rounded-2"
            type="text"
            name="name"
            placeholder="Nombre"
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

        <label className="w-100 my-2">
          <textarea
            className="w-100"
            name="description"
            placeholder="descripción"
          ></textarea>
        </label>

        <label className="d-flex align-items-center justify-content-between px-2 form-switch w-100">
          <p>Day</p>
          <input
            className="form-check-input m-0"
            type="checkbox"
            role="switch"
            name="select-this-date"
          />
        </label>
      </form>
    </section>
  );
}

export default MainTaskForm;
