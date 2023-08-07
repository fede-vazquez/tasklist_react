import { scroller } from "react-scroll";

/**
 * Función para centrar un objeto horizontalmente dentro de un contenedor con scroll.
 * @param {String} itemToCenterName Nombre o id del elemento que queramos centrar. Utilizando al principio del nombre un "." si es una clase o un "#" si es un id.
 * @param {String} containerName Nombre o id del contenedor del objeto. Utilizando al principio del nombre un "." si es una clase o un "#" si es un id.
 * @param {Number} offset Distancia que hay entre desde un lado del contenedor hasta el centro del mismo, descontando la mitad del ancho del elemento que se quiere centrar, tiene que ser negativo.
 */
export function scrollToActiveItemX(itemToCenterName, containerName, offset) {
  const nameItem = document
    .querySelector(itemToCenterName)
    .getAttribute("name");
  scroller.scrollTo(nameItem, {
    duration: 900,
    smooth: "easeInOutQuart",
    containerId: containerName,
    offset: offset,
    horizontal: true,
  });
}

/**
 *
 * @param {String} containerName Clase o id del contenedor.
 * @param {String} itemName Clase o id del item que queremos centrar
 * @returns Retorna el valor del offset. Es decir, el ancho del contenedor menos el ancho del item y el resultado lo dividimos en 2, lo devuelve en negativo.
 */
export function getOffSet(containerName, itemName) {
  const container = document.querySelector(containerName);
  const item = document.querySelector(itemName);
  const containerWidth = container.offsetWidth;
  const itemWidth = item.offsetWidth;
  return (-1 * (containerWidth - itemWidth)) / 2;
}
