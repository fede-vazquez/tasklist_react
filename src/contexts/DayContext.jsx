import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
dayjs.locale("es");

const DayContext = createContext();

/**
 * Contexto de la fecha que se esta viendo.
 */
function DayContextProvider({ children }) {
  const dateInSessionStorage =
    sessionStorage.getItem("dateInSession") || dayjs().format("DD/MM/YYYY");

  const [dateSelected, setDateSelected] = useState(
    dayjs(dateInSessionStorage, "DD/MM/YYYY")
  );

  const [dateSelectedFormats, setDateSelectedFormats] = useState({
    complete: "",
    monthYear: "",
    monthName: "",
  });

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
    setDateSelectedFormats({
      complete: dateSelected.format("DD/MM/YYYY"),
      monthYear: dateSelected.format("MM/YYYY"),
      monthName:
        dateSelected.format("MMMM")[0].toUpperCase() +
        dateSelected.format("MMMM").slice(1),
    });
  }, [dateSelected]);
  return (
    <DayContext.Provider value={{ dateSelectedFormats, updateDate }}>
      {children}
    </DayContext.Provider>
  );
}

export { DayContextProvider, DayContext };
