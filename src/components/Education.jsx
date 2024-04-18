import React, { useState } from "react";
import "../styles/Education.css";

function Education() {
  const [formAddDisplay, setFormAddDisplay] = useState(true);
  const [formEditDisplay, setFormEditDisplay] = useState(false);
  const [degreeSchool, setDegreeSchool] = useState("TARUMT");
  const [degreeDate, setDegreeDate] = useState("2024-04");
  const [degreeName, setDegreeName] = useState("Bachelor in CS");

  const [formValues, setFormValues] = useState({
    inputSchool: degreeSchool,
    inputDate: degreeDate,
    inputDegree: degreeName,
  });

  const [addValues, setAddValues] = useState({
    addSchool: "",
    addDate: "",
    addDegree: "",
  });

  const showForm = () => {
    setFormValues({
      inputSchool: degreeSchool,
      inputDate: degreeDate,
      inputDegree: degreeName,
    });
    setFormEditDisplay(!formEditDisplay);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddChange = (event) => {
    const { name, value } = event.target;
    setAddValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDegreeSchool(formValues.inputSchool);
    setDegreeDate(formValues.inputDate);
    setDegreeName(formValues.inputDegree);
    alert("Education details have been successfully updated.");
    setFormEditDisplay(false);
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    setDegreeSchool(addValues.addSchool);
    setDegreeDate(addValues.addDate);
    setDegreeName(addValues.addDegree);
    alert("New education details have been added.");
    setAddValues({
      addSchool: "",
      addDate: "",
      addDegree: "",
    });
    setFormAddDisplay(false);
  };

  return (
    <div className="education">
      <div className="educationAdd">
        <h1>Add New Education</h1>
        {formAddDisplay && (
          <form onSubmit={handleAddSubmit}>
            <label htmlFor="addSchool">Degree school: </label>
            <input
              type="text"
              name="addSchool"
              value={addValues.addSchool}
              onChange={handleAddChange}
            />
            <br />
            <label htmlFor="addDate">Date of study: </label>
            <input
              type="date"
              name="addDate"
              value={addValues.addDate}
              onChange={handleAddChange}
            />
            <br />
            <label htmlFor="addDegree">Degree name: </label>
            <input
              type="text"
              name="addDegree"
              value={addValues.addDegree}
              onChange={handleAddChange}
            />
            <br />
            <button type="submit">Add Education</button>
          </form>
        )}
      </div>
      <div className="educationEdit">
        <h1>Education</h1>
        <h1>{degreeSchool}</h1>
        <h2>Date of study: {degreeDate}</h2>
        <h2>{degreeName}</h2>
        <button onClick={showForm}>Edit</button>
        {formEditDisplay && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="inputSchool">Degree school: </label>
            <input
              type="text"
              name="inputSchool"
              value={formValues.inputSchool}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="inputDate">Date of study: </label>
            <input
              type="date"
              name="inputDate"
              value={formValues.inputDate}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="inputDegree">Degree name: </label>
            <input
              type="text"
              name="inputDegree"
              value={formValues.inputDegree}
              onChange={handleInputChange}
            />
            <br />
            <button type="submit">Save Changes</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Education;
