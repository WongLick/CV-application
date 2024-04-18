import React, { useState } from "react";
import "../styles/Experience.css";

function Experience() {
  const [displayFormAdd, setDisplayFormAdd] = useState(true);
  const [displayFormEdit, setDisplayFormEdit] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [addValues, setAddValues] = useState({
    addCompanyName: "",
    addPositionTitle: "",
    addResponsibility: "",
    addStartDate: "",
    addEndDate: "",
  });

  const [editValues, setEditValues] = useState({
    editCompanyName: "",
    editPositionTitle: "",
    editResponsibility: "",
    editStartDate: "",
    editEndDate: "",
  });

  const handleAddSubmit = (event) => {
    event.preventDefault();
    setCompanyName(addValues.addCompanyName);
    setPositionTitle(addValues.addPositionTitle);
    setResponsibility(addValues.addResponsibility);
    setStartDate(addValues.addStartDate);
    setEndDate(addValues.addEndDate);
    alert("Experience has been added.");
    setAddValues({
      addCompanyName: "",
      addPositionTitle: "",
      addResponsibility: "",
      addStartDate: "",
      addEndDate: "",
    });
    setDisplayFormAdd(false);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    setCompanyName(editValues.editCompanyName);
    setPositionTitle(editValues.editPositionTitle);
    setResponsibility(editValues.editResponsibility);
    setStartDate(editValues.editStartDate);
    setEndDate(editValues.editEndDate);
    alert("Experience details have been updated.");
  };

  const handleAddChange = (event) => {
    const { name, value } = event.target;
    setAddValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showEditForm = () => {
    setDisplayFormEdit(!displayFormEdit);
    setEditValues({
      editCompanyName: companyName,
      editPositionTitle: positionTitle,
      editResponsibility: responsibility,
      editStartDate: startDate,
      editEndDate: endDate,
    });
  };

  return (
    <div className="experience">
      <div className="experienceAdd">
        <h1>Add experiences</h1>
        {displayFormAdd && (
          <form onSubmit={handleAddSubmit}>
            <label htmlFor="addCompanyName">Company name: </label>
            <input
              type="text"
              name="addCompanyName"
              value={addValues.addCompanyName}
              onChange={handleAddChange}
            />
            <br />
            <label htmlFor="addPositionTitle">Position title: </label>
            <input
              type="text"
              name="addPositionTitle"
              value={addValues.addPositionTitle}
              onChange={handleAddChange}
            />
            <br />
            <label htmlFor="addResponsibility">Responsibility: </label>
            <input
              type="text"
              name="addResponsibility"
              value={addValues.addResponsibility}
              onChange={handleAddChange}
            />
            <br />
            <label htmlFor="addStartDate">Started from: </label>
            <input
              type="date"
              name="addStartDate"
              value={addValues.addStartDate}
              onChange={handleAddChange}
            />
            <label htmlFor="addEndDate">Until: </label>
            <input
              type="date"
              name="addEndDate"
              value={addValues.addEndDate}
              onChange={handleAddChange}
            />
            <br />
            <button type="submit">Add</button>
          </form>
        )}
      </div>
      <div className="experienceEdit">
        <h1>{companyName}</h1>
        <h2>{positionTitle}</h2>
        <h2>{responsibility}</h2>
        <h2>
          Started from {startDate} to {endDate}
        </h2>
        <button onClick={showEditForm}>Edit</button>
        {displayFormEdit && (
          <form onSubmit={handleEditSubmit}>
            <label htmlFor="editCompanyName">Company name: </label>
            <input
              type="text"
              name="editCompanyName"
              value={editValues.editCompanyName}
              onChange={handleEditChange}
            />
            <br />
            <label htmlFor="editPositionTitle">Position title: </label>
            <input
              type="text"
              name="editPositionTitle"
              value={editValues.editPositionTitle}
              onChange={handleEditChange}
            />
            <br />
            <label htmlFor="editResponsibility">Responsibility: </label>
            <input
              type="text"
              name="editResponsibility"
              value={editValues.editResponsibility}
              onChange={handleEditChange}
            />
            <br />
            <label htmlFor="editStartDate">Started from: </label>
            <input
              type="date"
              name="editStartDate"
              value={editValues.editStartDate}
              onChange={handleEditChange}
            />
            <label htmlFor="editEndDate">Until: </label>
            <input
              type="date"
              name="editEndDate"
              value={editValues.editEndDate}
              onChange={handleEditChange}
            />
            <br />
            <button type="submit">Save Changes</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Experience;
