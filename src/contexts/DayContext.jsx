import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
dayjs.locale("es");

const DayContext = createContext();

const getDateFormats = (date) => {
  return {
    complete: date.format("DD/MM/YYYY"),
    monthYear: date.format("MM/YYYY"),
    monthName:
      date.format("MMMM")[0].toUpperCase() + date.format("MMMM").slice(1),
    monthNumber: date.format("M"),
    dayAbbreviation: date.format("ddd"),
    dayNumber: date.format("D"),
  };
};

/**
 * Contexto de la fecha que se esta viendo.
 */
function DayContextProvider({ children }) {
  const dateInSessionStorage =
    sessionStorage.getItem("dateInSession") || dayjs().format("DD/MM/YYYY");

  const [dateSelected, setDateSelected] = useState(
    dayjs(dateInSessionStorage, "DD/MM/YYYY")
  );

  const [dateSelectedFormats, setDateSelectedFormats] = useState(
    getDateFormats(dateSelected)
  );

  /**
   * Función que cambia la fecha en el estado y en la sesión.
   * @param {Object} newDate Fecha que se quiere cambiar.
   */
  function updateDate(newDate) {
    const newDateCompleteFormats = newDate.format("DD/MM/YYYY");
    if (newDateCompleteFormats !== dateSelectedFormats.complete) {
      setDateSelected(newDate);
      sessionStorage.setItem("dateInSession", newDateCompleteFormats);
    }
  }

  useEffect(() => {
    setDateSelectedFormats(getDateFormats(dateSelected));
  }, [dateSelected]);
  console.log(dateSelectedFormats);
  return (
    <DayContext.Provider value={{ dateSelectedFormats, updateDate }}>
      {children}
    </DayContext.Provider>
  );
}

export { DayContextProvider, DayContext };
