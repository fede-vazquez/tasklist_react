export function findItemInArray(idToFind, arrayToSearch) {
  const item = arrayToSearch.find((itemInArray) => {
    return itemInArray.id === idToFind;
  });

  return item;
}
