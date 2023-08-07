/**
 * Función que actualiza un objeto dentro del array del localStorage por el id.
 * @param {String} localStorageName Nombre del Lugar dentro del localStorage que queremos actualizar.
 * @param {String|Number} idToUpdate Id del objeto dentro del array que querremos actualizar.
 * @param {Object} newData Nuevos datos que se asignarán al objeto dentro del array.
 */
export function updateData(localStorageName, idToUpdate, newData) {
  const listJson = localStorage.getItem(localStorageName);

  const list = JSON.parse(listJson);

  const indexToUpdate = list.findIndex((item) => {
    return item.id === idToUpdate;
  });

  list[indexToUpdate] = newData;

  const newListJson = JSON.stringify(list);

  localStorage.setItem(localStorageName, newListJson);
}
