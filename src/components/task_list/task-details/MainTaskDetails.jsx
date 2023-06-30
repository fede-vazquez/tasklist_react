import React from "react";
import { useLocation } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";

function MainTaskDetail() {
  const location = useLocation();
  const { taskId } = getQueryParams(location.search, "task");

  let task = true;
  if (localStorage.getItem("useTasks")) {
    const taskList = localStorage.getItem("userTasks");
    task = taskList.find((task) => (task.id = taskId));
  }

  const daysInWeek = [
    { dayId: 1, name: "Lunes" },
    { dayId: 2, name: "Martes" },
    { dayId: 3, name: "Miércoles" },
    { dayId: 4, name: "Jueves" },
    { dayId: 5, name: "Viernes" },
    { dayId: 6, name: "Sábado" },
    { dayId: 7, name: "Domingo" },
  ];

  return (
    <section className="px-3 py-2">
      {task && (
        <div>
          <h2 className="fs-1 pt-2 mb-0 text-center">nombre de tarea</h2>
          <p className="text-center">genero</p>

          <p className="pt-3">
            descripción Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Commodi, ea.
          </p>

          <p className="mt-4">
            Horario:
            <span className="fs-xxl task_hour_text d-block lh-1">00:00</span>
          </p>

          <div className="mt-4">
            <h6>todos los días || no se repite || lista de ciertos días.</h6>
            <ul className="d-flex justify-content-evenly">
              {daysInWeek.map((day) => (
                <li
                  key={day.dayId}
                  className="rounded-5 circle-checkbox d-flex justify-content-center align-items-center fw-bold"
                >
                  <p>{day.name[0]}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* botones para editar y borrar */}
        </div>
      )}
    </section>
  );
}

export default MainTaskDetail;
