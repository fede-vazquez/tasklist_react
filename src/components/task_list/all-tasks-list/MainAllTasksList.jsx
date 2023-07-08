import React from "react";
import TaskItem from "../TaskItem";

function MainAllTasksList() {
  const tasks = JSON.parse(localStorage.getItem("userTasks"));

  return (
    <section>
      {tasks.length >= 1 ? (
        <ul className="bg-2">
          {tasks.map((task, i) => {
            return (
              <li
                key={task.id}
                className="row m-0 border border-start-0 border-end-0 py-2 justify-content-center align-items-center"
              >
                <TaskItem task={task} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="p-2 fs-3">No hay tareas...</p>
      )}
    </section>
  );
}

export default MainAllTasksList;
