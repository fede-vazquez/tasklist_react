export const validationsTaskForm = [
  {
    name: "title",
    validation: (value) => {
      return value.trim().length >= 3;
    },
    errorMessage: "El título debe tener mínimo 3 letras.",
  },

  {
    name: "genre",
    validation: (value) => {
      return value.trim() !== "";
    },
    errorMessage: "Debe agregar un género.",
  },
];
