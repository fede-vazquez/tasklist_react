// Centra el elemento horizontalmente.
export function centerItemX(container) {
  if (container) {
    // Verificación adicional
    const itemSelected = container.querySelector(".active-date-item");
    if (itemSelected) {
      const containerWidth = container.offsetWidth;
      const itemWidth = itemSelected.offsetWidth;
      const itemOffsetLeft = itemSelected.offsetLeft;
      const scrollLeft = itemOffsetLeft - (containerWidth - itemWidth) / 2;

      // Si el item esta a la derecha
      if (container.scrollLeft < scrollLeft) {
        const differentSpace = -1 * (container.scrollLeft - scrollLeft);
        for (let i = 1; i <= differentSpace; i++) {
          setTimeout(() => {
            container.scrollLeft = container.scrollLeft + 1;
          }, i * 2.5);
        }
      }

      // Si el item esta a la izquierda
      if (container.scrollLeft > scrollLeft) {
        const differentSpace = container.scrollLeft - scrollLeft;
        for (let i = 1; i <= differentSpace; i++) {
          setTimeout(() => {
            container.scrollLeft = container.scrollLeft - 1;
          }, i * 2.5);
        }
      }
      setTimeout(() => {}, 1000);
    }
  }
}
