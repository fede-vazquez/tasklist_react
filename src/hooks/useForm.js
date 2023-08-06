import { useState } from "react";

/**
 * Función que valida un input específico con su validación correspondiente.
 *
 * La cual modifica un array de errores que se le pasa como parámetro.
 *
 * @param {Object} e Evento que se dispara y será validado.
 * @param {Array<Object>} validations Array de validaciones.
 * @param {Object} errors Objeto que contiene los errores.
 * @returns Retorna un nuevo objeto de errores.
 */
const validationsFormInputs = (e, validations, errors) => {
  const { name: inputName, value: inputValue } = e.target;

  const validationSelected = validations.find(
    (validation) => validation.name === inputName
  );

  if (validationSelected) {
    if (!validationSelected.validation(inputValue)) {
      errors[inputName] = { msg: validationSelected.errorMessage };
    } else {
      delete errors[inputName];
    }
  }

  return errors;
};
/**
 * Hook personalizado, para trabajar con los formularios de una forma más simple.
 * @param {Object} initialForm Objeto con los valores iniciales del formulario.
 * @param {Array<Object>} validations Array con validaciones para el formulario.
 *
 * @returns Retorna:
 *
 * form (Objeto con los atributos que representa el formulario),
 *
 * errors (Objeto que contiene los errores en el formulario),
 *
 * handleChanges (Función que modifica los valores dentro del formulario cuando se modifica un input),
 *
 * handleBlur (Función que modifica los valores dentro del formulario cuando se quita el foco un input),
 *
 * handleCheckbox (Función que modifica los valores dentro del formulario cuando se modifica un checkbox),
 *
 * handleMultipleCheckbox (Función que modifica un atributo que contiene un array con valores de los checkbox),
 *
 * onSubmit (Función que valida y modifica los errores del formulario.),
 */
export const useForm = (initialForm, validations) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  /**
   * Función para controlar y modificar el formulario cuando se modifica un input.
   * @param {Object} e Evento que se dispara.
   */
  function handleChanges(e) {
    const { name: inputName, value: inputValue } = e.target;
    setForm({
      ...form,
      [inputName]: inputValue,
    });
    setErrors(validationsFormInputs(e, validations, errors));
  }

  /**
   * Función para controlar y modificar el formulario cuando se saca el foco en un input.
   * @param {Object} e Evento que se dispara.
   */
  function handleBlur(e) {
    handleChanges(e);
  }

  /**
   * Función para controlar y modificar el formulario cuando se modifica un checkbox.
   * @param {Object} e Evento que se dispara.
   */
  function handleCheckbox(e) {
    const { name: inputName, checked: inputChecked } = e.target;

    setForm({
      ...form,
      [inputName]: inputChecked,
    });
  }

  /**
   * Función que para controlar los inputs que cuenten con varios checkbox.
   * @param {HTMLElement} input Input que dispara el evento.
   * @param {String} formInputName Nombre del input.
   * @param {String} checkboxId Id del checkbox que se seleccionó.
   * @param {String|Number} checkboxValue Valor del checkbox.
   */
  function handleMultipleCheckbox(
    input,
    formInputName,
    checkboxId,
    checkboxValue
  ) {
    const { checked } = input;

    setForm((prevForm) => {
      let selectedChecked = [...(prevForm[formInputName] || [])];

      if (checked) {
        selectedChecked.push({
          id: checkboxId,
          checkboxName: checkboxValue,
        });
      } else {
        selectedChecked = selectedChecked.filter(
          (checkedItem) => checkedItem.checkboxName !== checkboxValue
        );
      }

      return {
        ...prevForm,
        [formInputName]: selectedChecked,
      };
    });
  }

  /**
   * Función que se encarga de validar todos los objetos del formulario.
   * Modifica el estado de errores en el hook.
   */
  function onSubmit() {
    const formKeys = Object.keys(form);

    formKeys.forEach((key) => {
      const fakeEvent = {
        target: {
          name: key,
          value: form[key],
        },
      };
      setErrors(validationsFormInputs(fakeEvent, validations, errors));
    });
  }

  return {
    form,
    errors,
    handleChanges,
    handleBlur,
    handleCheckbox,
    handleMultipleCheckbox,
    onSubmit,
  };
};
