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
      <form className="row justify-content-center my-2">
        <label className="col-10">
          <input
            onChange={(e) => handleChanges(e)}
            className="w-100 p-2 border-0 rounded-2"
            type="text"
            name="title"
            placeholder="Título"
            value={filters.title}
          />
        </label>
      </form>
    </article>
  );
}

export default FiltersSection;
