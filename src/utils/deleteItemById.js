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
