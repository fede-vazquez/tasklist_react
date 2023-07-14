import React, { useMemo, useState } from "react";
import TaskItem from "../TaskItem";
import FiltersSection from "./FiltersSection";

function MainAllTasksList() {
  const tasks = JSON.parse(localStorage.getItem("userTasks"));

  const [filters, setFilters] = useState({
    title: "",
    genre: "",
  });

  // Modificamos el valor de "filterTasks" solo si se modifican "filters" o "task".
  const filterTasks = useMemo(() => {
    // Si existen filtros, filtramos la lista de tareas dependiendo de los filtros.
    if (filters && Object.keys(filters).length >= 0 && tasks) {
      // Tomamos los nombres de cada atributo que tendrá el objeto de "filters".
      const filtersName = Object.keys(filters);

      // Filtramos el array de tasks y guardamos el resultado en "newFilterTasksList".
      let newFilterTasksList = tasks.filter((task) => {
        // Creamos array que guardará los resultados de cada filtro.
        let results = [];

        // Recorremos el "filterName" verificando si alguno de los atributos de la lista
        // de tasks incluye el valor del atributo dentro del objeto de "filters".
        filtersName.forEach((filterName) => {
          // Agregando la función "toLowerCase" para que no sea necesario respetar las mayúsculas.
          // Agrega el resultado "true" o "false" dependiendo de si lo incluye o no.
          results.push(
            task[filterName]
              ?.toLowerCase()
              .includes(filters[filterName].toLowerCase())
          );
        });

        // Si incluye un false, devuelve false, para que no se incluya en el filtro.
        return !results.includes(false);
      });

      // Retornamos el nuevo valor.
      return newFilterTasksList;
    }

    // Si "filters" no existe, retornamos "tasks".
    return tasks;
  }, [filters, tasks]);

  return (
    <section>
      <FiltersSection setFilters={setFilters} filters={filters} />

      {filterTasks?.length >= 1 ? (
        <article>
          <ul className="bg-2">
            {filterTasks.map((task, i) => {
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
        </article>
      ) : (
        <p className="p-2 fs-3">No hay tareas...</p>
      )}
    </section>
  );
}

export default MainAllTasksList;

//   let newFilterTasksList = tasks.filter((task) => {
//     const filterTitle = task.title
//       ?.toLowerCase()
//       .includes(filters.title.toLowerCase());

//     const filterGenre = task.genre
//       ?.toLowerCase()
//       .includes(filters.genre.toLowerCase());

//     return filterTitle && filterGenre;
//   });
