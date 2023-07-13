import React from "react";

function FiltersSection({ setFilters, filters }) {
  function handleChanges(e) {
    setFilters((prevFilters) => {
      return { ...prevFilters, [e.target.name]: e.target.value };
    });
  }

  return (
    <article>
      <h3 className="ps-3 py-1">Filtros</h3>
      <form className="my-2 row text-center justify-content-center">
        <label className="col-10 m-auto">
          <input
            onChange={(e) => handleChanges(e)}
            className="w-100 p-2 border-0 rounded-2"
            type="text"
            name="title"
            placeholder="Título"
            value={filters.title}
          />
        </label>

        <div className="d-flex col-10 py-2 justify-content-between">
          <label className="fs-5">Genero:</label>

          <select
            className="border-0 rounded-2 ms-3 px-2"
            name="genre"
            onChange={(e) => {
              handleChanges(e);
            }}
            value={filters.genre}
          >
            <option value="">Todos</option>
            <option value="Trabajo">Trabajo</option>
            <option value="Personal">Personal</option>
            <option value="Estudio">Estudio</option>
          </select>
        </div>
      </form>
    </article>
  );
}

export default FiltersSection;
