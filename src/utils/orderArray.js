export function orderArray(array, attributeToOrder) {
  const orderArray = array.sort((a, b) => {
    return a[attributeToOrder] - b[attributeToOrder];
  });

  return orderArray;
}
