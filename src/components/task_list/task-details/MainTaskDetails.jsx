import React from "react";
import { useLocation } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import RepeatInfo from "./RepeatInfo";

function MainTaskDetail() {
  const location = useLocation();
  const { task: taskId } = getQueryParams(location.search, "task");

  let task = false;
  if (localStorage.getItem("userTasks")) {
    const taskList = JSON.parse(localStorage.getItem("userTasks"));
    task = taskList.find((task) => task.id === taskId);
  }

  return (
    <section className="px-3 py-2">
      {task && (
        <div>
          <h2 className="fs-1 pt-2 mb-0 text-center">{task.title}</h2>
          <p className="text-center">{task.genre}</p>

          <p className="pt-3">{task.description}</p>

          <p className="mt-4">
            Horario:
            <span className="fs-xxl task_hour_text d-block lh-1">
              {task.hour}
            </span>
          </p>

          <RepeatInfo task={task} />

          {/* botones para editar y borrar */}
        </div>
      )}
    </section>
  );
}

export default MainTaskDetail;
