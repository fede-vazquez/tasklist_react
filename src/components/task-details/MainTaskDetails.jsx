import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getQueryParams } from "../../utils/getQueryParams";
import RepeatInfo from "./RepeatInfo";
import ButtonsDeleteEdit from "./ButtonsDeleteEdit";
import ConfirmDelete from "../ConfirmDelete";

function MainTaskDetail() {
  const [showAlert, setShowAlert] = useState(false);

  const location = useLocation();
  const { task: taskId } = getQueryParams(location.search, "task");

  let task = false;
  if (localStorage.getItem("userTasks")) {
    const taskList = JSON.parse(localStorage.getItem("userTasks"));
    task = taskList.find((task) => task.id === taskId);
  }

  return (
    <section className="px-3 py-2">
      {/* Confirmación de borrado de tarea */}
      {showAlert && (
        <ConfirmDelete
          urlToRedirect={"/"}
          array={JSON.parse(localStorage.getItem("userTasks"))}
          idToRemove={task.id}
          setShowAlert={setShowAlert}
          message={`¿Seguro que quiere borrar "${task.title}"?`}
        />
      )}

      <Link to={"/"}>
        <i className="fa-solid fa-chevron-left fs-5 pt-2 ps-1"></i>
      </Link>
      {task && (
        <div>
          <h2 className="fs-1 pt-2 mb-0 text-center">{task.title}</h2>
          <p className="text-center">{task.genre}</p>

          <p className="pt-3">{task.description}</p>

          <p className="mt-4">
            Horario:
            {task.allDay ? (
              <span className="d-block fs-1">Todo el día</span>
            ) : (
              <span className="fs-xxl task_hour_text d-block lh-1">
                {task.hour}
              </span>
            )}
          </p>

          <RepeatInfo task={task} />

          {/* botones para editar y borrar */}
          <ButtonsDeleteEdit task={task} setShowAlert={setShowAlert} />
        </div>
      )}
    </section>
  );
}

export default MainTaskDetail;
