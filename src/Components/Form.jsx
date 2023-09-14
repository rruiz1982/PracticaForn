import React from "react";
import { useState } from "react";

const Form = () => {
  const [data, setValues] = useState({
    name: "",
    email: "",
  });

  const [validation, setValidation] = useState(false);

  const validateName = () => {
    let nameUser = data.name;
    if (nameUser.length <= 5) {
      return alert("Ingrese los datos con el formato");
    }
    return true;
  };

  const validateEmail = () => {
    let emailUser = data.email.split("@");
    if (emailUser.length < 2) {
      return alert("Ingrese los datos con el formato");
    }
    let dotCom = emailUser[1].split(".");
    if (dotCom.length < 2) {
      return alert("Enter data with correct email format");
    }
    return true;
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    const newData = {
      ...data,
      [name]: value,
    };
    setValues(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameValidation = validateName();
    let emailValidation = validateEmail();

    if (nameValidation && emailValidation) {
      setValidation(true);
    }
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input-form"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-form"
          onChange={handleChange}
        />
        <button type="submit" className="btn-form">
          Send
        </button>
      </form>
      {validation ? (
        <h2>
          Muchas Gracias {data.name}, Nos pondremos en contacto con usted lo antes posible a través de
           correo electrónico
        </h2>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
