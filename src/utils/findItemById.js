/**
 * Función para buscar un elemento dentro de un array por su id.
 * @param {String|Number} idToFind Id que se quiera buscar.
 * @param {Array<Object>} arrayToSearch Array de objetos donde se quiera buscar.
 * @returns Retorna el objeto que coincida.
 */
export function findItemInArray(idToFind, arrayToSearch) {
  const item = arrayToSearch.find((itemInArray) => {
    return itemInArray.id === idToFind;
  });

  return item;
}
