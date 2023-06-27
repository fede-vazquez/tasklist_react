import { v4 as uuid4 } from "uuid";

export function saveData(localStorageName, data) {
  // Si el localStorage no existe hace que sea un array vacío.
  // Si existe, le hace un parse y se traslada a formato JS
  let newLocalStorage = localStorage[localStorageName]
    ? JSON.parse(localStorage[localStorageName])
    : [];

  // Agrega la data al array, con un id único.
  newLocalStorage.push({ id: uuid4(), ...data });

  // Convierte a formato JSON.
  const newLocalStorageJson = JSON.stringify(newLocalStorage);

  // Modifica el localStorage
  localStorage[localStorageName] = newLocalStorageJson;
}
