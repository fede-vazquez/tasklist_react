import { v4 as uuid4 } from "uuid";

/**
 * Función que guarda objetos en un array dentro del localStorage, al crearlo se le asignará un id.
 * @param {String} localStorageName Nombre del lugar donde se va a guardar los datos en el localStorage.
 * @param {Object} data Datos que se quieren guardar en el mismo.
 */
export function saveData(localStorageName, data) {
  // Si el localStorage no existe hace que sea un array vacío.
  // Si existe, le hace un parse y se traslada a formato JS
  let dataInLocalStorage = localStorage[localStorageName]
    ? JSON.parse(localStorage[localStorageName])
    : [];

  // Agrega la data al array, con un id único.
  dataInLocalStorage.push({ id: uuid4(), ...data });

  // Convierte a formato JSON.
  const newLocalStorageJson = JSON.stringify(dataInLocalStorage);

  // Modifica el localStorage
  localStorage[localStorageName] = newLocalStorageJson;
}
