/**
 * Función para filtrar un array de strings.
 * @param {String} valueToFind Texto que se quiere buscar.
 * @param {Array<String>} listToSearch Array de strings donde se quiere buscar.
 * @returns Array filtrado con los resultados que contengan el texto dado.
 */
export function search(valueToFind, listToSearch) {
  const resultList = listToSearch.filter((item) => {
    return item.toLowerCase().includes(valueToFind.toLowerCase());
  });

  return resultList;
}
