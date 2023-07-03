import React, { useState } from "react";
import { search } from "../../../utils/searchInArray";

function GenreInput({ handleChanges, handleBlur, form }) {
  // Más adelante esta variable traerá información del localStorage.
  const useTaskGenres = ["Trabajo", "Estudio", "Personal"];

  const [resultOptions, setResultOptions] = useState(useTaskGenres);

  function searchState(value) {
    const filterList = search(value, useTaskGenres);
    setResultOptions(filterList);
  }

  function selectOption(taskName) {
    const fakeEvent = { target: { name: "genre", value: taskName } };
    handleChanges(fakeEvent);
  }

  return (
    <div className="genre-input-container">
      <label className="w-100 mt-2">
        <input
          onChange={(e) => {
            handleChanges(e);
            searchState(e.target.value);
          }}
          onBlur={(e) => handleBlur(e)}
          className="genre-input w-100 p-2 border-0 rounded-2"
          type="text"
          name="genre"
          placeholder="Genero"
          value={form.genre}
          autoComplete="off"
        />
      </label>
      {resultOptions.length !== 0 && (
        <ul className="result-options-list rounded-bottom-2">
          {resultOptions.map((taskName, i) => {
            return (
              <li
                key={taskName + i}
                onClick={(e) => {
                  selectOption(taskName);
                }}
                className="result-option"
              >
                {taskName}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default GenreInput;
