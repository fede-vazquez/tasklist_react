import { scroller } from "react-scroll";

// React scroll

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

export function getOffSet(containerName, itemName) {
  const container = document.querySelector(containerName);
  const item = document.querySelector(itemName);
  const containerWidth = container.offsetWidth;
  const itemWidth = item.offsetWidth;
  return (-1 * (containerWidth - itemWidth)) / 2;
}
