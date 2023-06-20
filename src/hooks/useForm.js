import { useState } from "react";

export const useForm = (initialForm, validations) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState();

  function handleChanges(e) {
    const eventInputName = e.target.name;
    const eventValue = e.target.value;

    setForm({
      ...form,
      [eventInputName]: eventValue,
    });
  }

  return { form, errors, handleChanges };
};
