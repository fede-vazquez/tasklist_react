import React from "react";
import TaskItem from "./TaskItem";

function DateTaskList({ date }) {
  // Maqueta de como se verán las tareas en el local storage.
  const tasks = [
    {
      repeatDays: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
      ],
      dateRepeat: null,
      name: "Tomar agua",
      hour: "10:00AM",
      genre: "personal",
    },
    {
      repeatDays: ["no repeat"],
      dateRepeat: null,
      name: "Cumpleaños de alguien",
      hour: "12:00AM",
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
