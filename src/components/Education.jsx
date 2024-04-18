import React, { useState } from "react";
import "../styles/Education.css";

function Education() {
  const [formDisplay, setFormDisplay] = useState(false);
  const [degreeSchool, setDegreeSchool] = useState("TARUMT");
  const [degreeDate, setDegreeDate] = useState("2024-04");
  const [degreeName, setDegreeName] = useState("Bachelor in CS");

  const [formValues, setFormValues] = useState({
    inputSchool: degreeSchool,
    inputDate: degreeDate,
    inputDegree: degreeName,
  });

  const showForm = () => {
    setFormDisplay(!formDisplay);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDegreeSchool(formValues.inputSchool);
    setDegreeDate(formValues.inputDate);
    setDegreeName(formValues.inputDegree);
    alert("Educaiton details have been successfully updated.");
    setFormDisplay(false);
  };

  return (
    <div className="education">
      <h1>Education</h1>
      <h1>{degreeSchool}</h1>
      <h2>Date of study: {degreeDate}</h2>
      <h2>{degreeName}</h2>
      <button onClick={showForm}>Edit</button>

      {formDisplay && (
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
  );
}
export default Education;
