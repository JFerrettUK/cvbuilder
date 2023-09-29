/* eslint-disable react/prop-types */
import { useState } from "react";
import ExperienceTab from "./ExperienceTab";

function ExperienceInputs({ experienceData, setExperienceData }) {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <ExperienceTab
        key={"Springfield Nuclear Power Plant"}
        companyName={"Springfield Nuclear Power Plant"}
      />
      <ExperienceTab
        key={"National Aeronautics and Space Administration"}
        companyName={"National Aeronautics and Space Administration"}
      />

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
          <label className="inputFor" htmlFor="location">
            Location
          </label>
          <input
            className="inputBox"
            type="text"
            id="location"
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
          <label className="inputFor" htmlFor="description">
            Description
          </label>
          <textarea
            className="inputBox"
            id="description"
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
        <button type="submit" className="saveButton experienceSave formButton">
          Add
        </button>
      </div>
    </>
  );
}

export default ExperienceInputs;
