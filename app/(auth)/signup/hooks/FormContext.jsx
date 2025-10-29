// app/(auth)/signup/context/FormContext.js

import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormData = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    birthday: new Date(),
    password: '',
    telephone: '',
    pays: '',
    statut: '',
  });

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const resetForm = () => {
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      birthday: new Date(),
      password: '',
      telephone: '',
      pays: '',
      statut: '',
    });
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;