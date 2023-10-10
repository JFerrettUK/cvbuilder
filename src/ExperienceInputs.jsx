/* eslint-disable react/prop-types */
import { useState } from "react";
import ExperienceTab from "./ExperienceTab";
import RemoveSpaces from "./RemoveSpaces";

function ExperienceInputs({
  experienceData,
  setExperienceData,
  saveExperience,
  experienceEntries,
}) {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [countNo, setCountNo] = useState(2);

  const resetInputValues = () => {
    setCompany("");
    setTitle("");
    setStart("");
    setEnd("");
    setLocation("");
    setDescription("");
  };

  const validateAndSave = () => {
    // Check if any field is empty
    if (!company || !title || !start || !end || !location || !description) {
      alert("Please fill in all experience fields.");
      return;
    }

    counter();
    saveExperience(experienceData);
    resetInputValues();
  };

  const counter = () => {
    setCountNo(countNo + 1);
  };

  return (
    <>
      {experienceEntries.map((entry, index) => {
        const generatedId = `${RemoveSpaces(entry.company)}${index}`;
        return (
          <ExperienceTab
            key={index}
            companyName={entry.company}
            id={generatedId}
          />
        );
      })}
      <div className="card experienceCard">
        <div className="inputPair inputCompanyName">
          <label className="inputFor" htmlFor="companyName">
            Company Name
          </label>
          <input
            className="inputBox"
            type="text"
            id="companyName"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
              setExperienceData({
                ...experienceData,
                company: e.target.value,
                id: `${RemoveSpaces(e.target.value)}${
                  experienceEntries.length
                }`,
              });
            }}
          />
        </div>
        <div className="inputPair inputPositionTitle">
          <label className="inputFor" htmlFor="positionTitle">
            Position Title
          </label>
          <input
            className="inputBox"
            type="text"
            id="positionTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setExperienceData({
                ...experienceData,
                title: e.target.value,
              });
            }}
          />{" "}
        </div>
        <div className="inputPair inputStartDate">
          <label className="inputFor" htmlFor="startDate">
            Start Date
          </label>
          <input
            className="inputBox"
            type="text"
            id="startDate"
            value={start}
            onChange={(e) => {
              setStart(e.target.value);
              setExperienceData({
                ...experienceData,
                start: e.target.value,
              });
            }}
          />
        </div>
        <div className="inputPair inputEndDate">
          <label className="inputFor" htmlFor="endDate">
            End Date
          </label>
          <input
            className="inputBox"
            type="text"
            id="endDate"
            value={end}
            onChange={(e) => {
              setEnd(e.target.value);
              setExperienceData({
                ...experienceData,
                end: e.target.value,
              });
            }}
          />
        </div>
        <div className="inputPair inputLocation">
          <label className="inputFor" htmlFor="expLocation">
            Location
          </label>
          <input
            className="inputBox"
            type="text"
            id="expLocation"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setExperienceData({
                ...experienceData,
                location: e.target.value,
              });
            }}
          />
        </div>
        <div className="inputPair inputDescription">
          <label className="inputFor" htmlFor="expDescription">
            Description
          </label>
          <textarea
            className="inputBox"
            id="expDescription"
            rows="5"
            maxLength="200"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setExperienceData({
                ...experienceData,
                description: e.target.value,
              });
            }}
          ></textarea>
        </div>
      </div>
      <div className="buttonCont">
        <button type="submit" className="editButton experienceEdit formButton">
          Edit
        </button>
        <button
          type="submit"
          className="saveButton experienceSave formButton"
          onClick={() => {
            validateAndSave();
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default ExperienceInputs;
