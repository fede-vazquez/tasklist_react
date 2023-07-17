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
    <section className="row container-lg m-auto mt-md-5 px-0">
      <article className="col-md-4">
        <h3 className="ps-3 py-1">Filtros</h3>
        <FiltersSection setFilters={setFilters} filters={filters} />
      </article>

      <article className="col-md-8 mt-md-2 p-0">
        <div
          className={`bg-2 d-flex justify-content-center align-items-center
        ${filterTasks?.length === 0 && "h-100"}`}
        >
          {filterTasks?.length >= 1 ? (
            <ul className="w-100">
              {filterTasks.map((task, i) => {
                return (
                  <li
                    key={task.id}
                    className="row m-0 border border-start-0 border-end-0 py-2 justify-content-center align-items-center "
                  >
                    <TaskItem task={task} />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="py-4 fs-3">No se encontraron tareas...</p>
          )}
        </div>
      </article>
    </section>
  );
}

export default MainAllTasksList;
