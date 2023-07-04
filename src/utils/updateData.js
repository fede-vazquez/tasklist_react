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
