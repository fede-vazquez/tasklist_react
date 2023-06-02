import React from "react";
import TaskItem from "./TaskItem";

function DateTaskList({ date }) {
  // Maqueta de como se verán las tareas en el local storage.
  const tasks = [
    {
      repeatDays: ["Lunes", "Martes", "Jueves", "Viernes", "Sábado"],
      dateRepeat: null,
      name: "Ir a trabajar",
      hour: "9:00AM",
      genre: "trabajo",
    },
    {
      repeatDays: ["no repeat"],
      dateRepeat: null,
      name: "Cumpleaños de alguien",
      hour: "todo el día",
      genre: "personal",
    },
    {
      repeatDays: ["everyday"],
      dateRepeat: null,
      name: "Estudiar React",
      hour: "4:00PM",
      genre: "estudio",
    },
  ];

  return (
    <div className="text-white bg-2">
      <ul>
        {tasks.map((task, i) => {
          return (
            <li key={task.name + i}>
              <TaskItem task={task} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DateTaskList;
