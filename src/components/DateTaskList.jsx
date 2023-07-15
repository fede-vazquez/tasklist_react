import React from "react";
import TaskItem from "./TaskItem";

function DateTaskList({ date }) {
  const dateCompleteFormat = date.format("DD/MM/YYYY");
  const dayNumber = Number(date.format("d"));
  // Maqueta de como se verán las tareas en el local storage.
  const tasks = localStorage.userTasks
    ? JSON.parse(localStorage.userTasks)
    : false;
  let dateTasks;

  if (tasks) {
    dateTasks = tasks.filter((task) => {
      // Si la tarea se repite este día.
      const taskRepeatToday = task.weekDaySelected.some(
        (day) => day.id === dayNumber
      );

      // Si la tarea no se repite, pero es el mismo día.
      const taskOnlyThisDate =
        dateCompleteFormat === task.date && task.weekDaySelected.length === 0;

      return taskRepeatToday || taskOnlyThisDate;
    });
  }

  function handleCheckedBackground(e) {
    const containerInput = e.target.parentNode;
    if (!containerInput.classList.contains("circle-checkbox-active")) {
      containerInput.classList.add("circle-checkbox-active");
    } else {
      containerInput.classList.remove("circle-checkbox-active");
    }
  }

  return (
    <div className="bg-2">
      {tasks ? (
        dateTasks.length !== 0 ? (
          <ul>
            {dateTasks.map((task, i) => {
              return (
                <li
                  key={task.id + "" + i}
                  className="row m-0 border border-start-0 border-end-0 py-1 justify-content-center align-items-center"
                >
                  <div className="rounded-5 position-relative circle-checkbox d-flex justify-content-center align-items-center fw-bold">
                    <i className="fa-solid fa-check"></i>
                    <div
                      className="position-absolute w-100 h-100"
                      onClick={(e) => {
                        handleCheckedBackground(e);
                      }}
                    ></div>
                  </div>
                  <TaskItem task={task} />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-center fs-3 py-3">No hay tareas para este día.</p>
        )
      ) : (
        <p className="text-center fs-3 py-3">Todavía no creaste tareas.</p>
      )}
    </div>
  );
}

export default DateTaskList;
