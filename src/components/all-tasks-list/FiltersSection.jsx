import React from "react";

function FiltersSection({ setFilters, filters }) {
  function handleChanges(e) {
    setFilters((prevFilters) => {
      return { ...prevFilters, [e.target.name]: e.target.value };
    });
  }

  return (
    <form className="row text-center justify-content-center px-0">
      <label className="col-10 col-md-11 m-auto">
        <input
          onChange={(e) => handleChanges(e)}
          className="w-100 p-2 border-0 rounded-2"
          type="text"
          name="title"
          placeholder="Título"
          value={filters.title}
        />
      </label>

      <div className="d-flex col-10 col-md-11 py-2 justify-content-between">
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
  );
}

export default FiltersSection;
