/**
 * Función para eliminar un objeto dentro de un array del localStorage.
 * @param {String|Number} idToRemove Id del objeto que se quiere eliminar.
 * @param {Array} array Array del cual se quiera eliminar el elemento
 * @param {String} localStorageArrayName String del nombre del localStorage que se quiera modificar.
 * @returns True si se elimina, false si no.
 */
export function deleteItemById(idToRemove, array, localStorageArrayName) {
  const indexToRemove = array.findIndex((obj) => obj.id === idToRemove);
  if (indexToRemove !== -1) {
    // Elimina y retorna true si existe en el array
    array.splice(indexToRemove, 1);
    localStorage.setItem(localStorageArrayName, JSON.stringify(array));
    return true;
  }

  // Retorna false si no existe
  return false;
}
