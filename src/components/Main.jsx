import React, { useState } from "react";
import "../styles/Main.css";

function Main() {
  const [formDisplay, setFormDisplay] = useState(false);
  const [name, setName] = useState("Wong");
  const [email, setEmail] = useState("email@email.com");
  const [phone, setPhone] = useState("011-10101010");

  const [formValues, setFormValues] = useState({
    inputName: name,
    inputEmail: email,
    inputPhone: phone,
  });

  const showForm = () => {
    setFormDisplay(!formDisplay);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setName(formValues.inputName);
    setEmail(formValues.inputEmail);
    setPhone(formValues.inputPhone);
    alert("Details have been successfully updated.");
    setFormDisplay(false);
  };

  return (
    <div className="main">
      <h1>Hello, my name is {name}</h1>
      <h2>This is my email address: {email}</h2>
      <h2>You can contact me with this phone number: {phone}</h2>
      <button onClick={showForm}>Edit</button>
      {formDisplay && (
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="inputName">Name: </label>
          <input
            id="inputName"
            type="text"
            name="inputName"
            value={formValues.inputName}
            onChange={handleFormChange}
          />
          <br />
          <label htmlFor="inputEmail">Email: </label>
          <input
            id="inputEmail"
            type="text"
            name="inputEmail"
            value={formValues.inputEmail}
            onChange={handleFormChange}
          />
          <br />
          <label htmlFor="inputPhone">Phone: </label>
          <input
            id="inputPhone"
            type="text"
            name="inputPhone"
            value={formValues.inputPhone}
            onChange={handleFormChange}
          />
          <br />
          <button type="submit">Save Details</button>
        </form>
      )}
    </div>
  );
}

export default Main;
