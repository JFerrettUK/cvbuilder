/* eslint-disable react/prop-types */
import { useState } from "react";
import EducationTab from "./EducationTab";

function EducationInputs({ educationData, setEducationData, saveEducation }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <EducationTab
        key={"Springfield University"}
        schoolName={"Springfield University"}
      />{" "}
      <div className="card educationCard">
        <div className="inputPair inputSchool">
          <label className="inputFor" htmlFor="school">
            School
          </label>
          <input
            className="inputBox"
            type="text"
            id="school"
            value={school}
            onChange={(e) => {
              setSchool(e.target.value);
              setEducationData({
                ...educationData,
                school: e.target.value,
              });
            }}
          />
        </div>
        <div className="inputPair inputDegree">
          <label className="inputFor" htmlFor="degree">
            Degree
          </label>
          <input
            className="inputBox"
            type="text"
            id="degree"
            value={degree}
            onChange={(e) => {
              setDegree(e.target.value);
              setEducationData({
                ...educationData,
                degree: e.target.value,
              });
            }}
          />
        </div>
        <div className="inputPair inputStart">
          <label className="inputFor" htmlFor="start">
            Start Date
          </label>
          <input
            className="inputBox"
            type="text"
            id="start"
            value={start}
            onChange={(e) => {
              setStart(e.target.value);
              setEducationData({
                ...educationData,
                start: e.target.value,
              });
            }}
          />
        </div>
        <div className="inputPair inputEnd">
          <label className="inputFor" htmlFor="end">
            End Date
          </label>
          <input
            className="inputBox"
            type="text"
            id="end"
            value={end}
            onChange={(e) => {
              setEnd(e.target.value);
              setEducationData({
                ...educationData,
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
              setEducationData({
                ...educationData,
                location: e.target.value,
              });
            }}
          />
        </div>
        <div className="inputPair inputLocation">
          <label className="inputFor" htmlFor="description">
            Description
          </label>
          <textarea
            className="inputBox"
            type="text"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setEducationData({
                ...educationData,
                description: e.target.value,
              });
            }}
          ></textarea>
        </div>
      </div>{" "}
      <div className="buttonCont">
        <button type="submit" className="editButton educationEdit formButton">
          Edit
        </button>
        <button
          type="submit"
          className="saveButton educationSave formButton"
          onClick={() => {
            saveEducation(educationData);
            console.log(educationData);
          }}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default EducationInputs;
