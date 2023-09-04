import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getQueryParams } from "../../utils/getQueryParams";
import RepeatInfo from "./RepeatInfo";
import ButtonsDeleteEdit from "./ButtonsDeleteEdit";
import ConfirmDelete from "../ConfirmDelete";
import useTasksContext from "../../hooks/useTasksContext";

function MainTaskDetail() {
  const [showAlert, setShowAlert] = useState(false);

  const location = useLocation();
  const { task: taskId } = getQueryParams(location.search, "task");

  const { tasks } = useTasksContext();

  let taskSelected = false;
  if (tasks) {
    taskSelected = tasks.find((task) => task.id === taskId);
  }

  return (
    <section className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto mt-md-5">
      {/* Confirmación de borrado de tarea */}
      {showAlert && (
        <ConfirmDelete
          urlToRedirect={"/"}
          idToRemove={taskSelected.id}
          setShowAlert={setShowAlert}
          message={`¿Seguro que quiere borrar "${taskSelected.title}"?`}
        />
      )}

      <Link
        to={"/"}
        className="mx-2 mx-md-0 mt-5 bg-2 px-4 py-3 btn-1 rounded-5"
      >
        <i className="fa-solid fa-chevron-left fs-5 mt-4"></i>
      </Link>
      {taskSelected && (
        <div>
          <h2 className="fs-1 pt-2 mb-0 text-center">{taskSelected.title}</h2>
          <p className="text-center">{taskSelected.genre}</p>

          <p className="pt-3">{taskSelected.description}</p>

          <p className="mt-4">
            Horario:
            {taskSelected.allDay ? (
              <span className="d-block fs-1">Todo el día</span>
            ) : (
              <span className="fs-xxl task_hour_text d-block lh-1">
                {taskSelected.hour}
              </span>
            )}
          </p>

          <RepeatInfo task={taskSelected} />

          {/* botones para editar y borrar */}
          <ButtonsDeleteEdit task={taskSelected} setShowAlert={setShowAlert} />
        </div>
      )}
    </section>
  );
}

export default MainTaskDetail;
