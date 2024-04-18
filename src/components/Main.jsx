import React, { useState } from "react";
import "../styles/Main.css";

function Main() {
  const [addValues, setAddValues] = useState({
    addName: "",
    addEmail: "",
    addPhone: "",
  });

  const [formDisplay, setFormDisplay] = useState(true);
  const [formEditDisplay, setFormEditDisplay] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [formValues, setFormValues] = useState({
    inputName: "",
    inputEmail: "",
    inputPhone: "",
  });

  const showEditForm = () => {
    setFormEditDisplay(!formEditDisplay);
    setFormValues({
      inputName: name,
      inputEmail: email,
      inputPhone: phone,
    });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues(prev => ({
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

  const handleAdd = (event) => {
    event.preventDefault();
    setName(addValues.addName);
    setEmail(addValues.addEmail);
    setPhone(addValues.addPhone);
    alert("New details have been added.");
    setAddValues({ addName: "", addEmail: "", addPhone: "" }); 
    setFormDisplay(false); 
  };

  const handleAddChange = (event) => {
    const { name, value } = event.target;
    setAddValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="main">
      <div className="mainCreate">
        <h1>Add New Default Details</h1>
        {formDisplay && (
          <form onSubmit={handleAdd}>
            <label htmlFor="addName">Name: </label>
            <input
              type="text"
              id="addName"
              name="addName"
              value={addValues.addName}
              onChange={handleAddChange}
            />
            <br />
            <label htmlFor="addEmail">Email: </label>
            <input
              type="text"
              id="addEmail"
              name="addEmail"
              value={addValues.addEmail}
              onChange={handleAddChange}
            />
            <br />
            <label htmlFor="addPhone">Phone: </label>
            <input
              type="text"
              id="addPhone"
              name="addPhone"
              value={addValues.addPhone}
              onChange={handleAddChange}
            />
            <br />
            <button type="submit">Add</button>
          </form>
        )}
      </div>
      <div className="mainResult">
        <h1>Hello, my name is {name}</h1>
        <h2>This is my email address: {email}</h2>
        <h2>You can contact me with this phone number: {phone}</h2>
        <button onClick={showEditForm}>Edit</button>
        {formEditDisplay && (
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
            <button type="submit">Save Changes</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Main;