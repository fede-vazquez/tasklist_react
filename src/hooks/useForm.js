import { useState } from "react";

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

export const useForm = (initialForm, validations) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  function handleChanges(e) {
    const { name: inputName, value: inputValue } = e.target;
    setForm({
      ...form,
      [inputName]: inputValue,
    });
    setErrors(validationsFormInputs(e, validations, errors));
  }

  function handleBlur(e) {
    handleChanges(e);
  }
  function handleCheckbox(e) {
    const { name: inputName, checked: inputChecked } = e.target;

    setForm({
      ...form,
      [inputName]: inputChecked,
    });
  }

  function handleMultipleCheckbox(e, formInputName, checkboxId) {
    const customAttribute = e.target.getAttribute("customattribute");
    const { checked } = e.target;

    setForm((prevForm) => {
      let selectedChecked = [...(prevForm[formInputName] || [])];

      if (checked) {
        selectedChecked.push({
          id: checkboxId,
          checkboxName: customAttribute,
        });
      } else {
        selectedChecked = selectedChecked.filter(
          (checkedItem) => checkedItem.checkboxName !== customAttribute
        );
      }

      return {
        ...prevForm,
        [formInputName]: selectedChecked,
      };
    });
  }

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
