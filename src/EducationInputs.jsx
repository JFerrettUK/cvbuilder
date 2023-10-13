/* eslint-disable react/prop-types */
import { useState } from "react";
import RemoveSpaces from "./RemoveSpaces";
import EducationTab from "./EducationTab";

function EducationInputs({
  educationData,
  setEducationData,
  saveEducation,
  educationEntries,
  setEducationEntries,
}) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [generatedId, setGeneratedId] = useState("");

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

    saveEducation(educationData);
    resetInputValues();
  };

  return (
    <>
      {educationEntries.map((entry, index) => {
        const generatedId = `${RemoveSpaces(entry.school)}${index}`;
        return (
          <EducationTab
            key={index}
            schoolName={entry.school}
            id={generatedId}
            educationEntries={educationEntries}
            setEducationEntries={setEducationEntries}
            setEducationData={setEducationData}
            educationData={educationData}
            setSchool={setSchool}
            setDegree={setDegree}
            setStart={setStart}
            setEnd={setEnd}
            setLocation={setLocation}
            setDescription={setDescription}
          />
        );
      })}
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
                id: `${RemoveSpaces(e.target.value)}${educationEntries.length}`,
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
