/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import EducationTab from "./EducationTab";

function EducationInputs({
  educationData,
  setEducationData,
  saveEducation,
  educationEntries,
}) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [countNo, setCountNo] = useState(1);

  const resetInputValues = () => {
    setSchool("");
    setDegree("");
    setStart("");
    setEnd("");
    setLocation("");
    setDescription("");
  };

  const validateAndSave = () => {
    if (!school || !degree || !start || !end || !location || !description) {
      alert("Please fill in all education fields.");
      return;
    }
    counter();
    saveEducation(educationData);
    resetInputValues();
  };

  const counter = () => {
    setCountNo(countNo + 1);
    console.log(countNo);
  };

  useEffect(() => {
    console.log(id);
  }, [id]); // This effect will run whenever the id changes

  return (
    <>
      {educationEntries.map((entry, index) => (
        <EducationTab key={index} schoolName={entry.school} />
      ))}
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
              setId(e.target.value + countNo);
              setEducationData({
                ...educationData,
                school: e.target.value,
                id: e.target.value + countNo,
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
          <label className="inputFor" htmlFor="eduLocation">
            Location
          </label>
          <input
            className="inputBox"
            type="text"
            id="eduLocation"
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
        <div className="inputPair inputDescription">
          <label className="inputFor" htmlFor="eduDescription">
            Description
          </label>
          <textarea
            className="inputBox"
            type="text"
            id="eduDescription"
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
          onClick={validateAndSave}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default EducationInputs;
