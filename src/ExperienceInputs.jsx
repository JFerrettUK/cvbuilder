import { useState } from "react";
import ExperienceTab from "./ExperienceTab";

function ExperienceInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <ExperienceTab
        key={"Springfield Nuclear Power Plant"}
        companyName={"Springfield Nuclear Power Plant"}
      />
      <ExperienceTab
        key={"National Aeronautics and Space Administration"}
        companyName={"NASA"}
      />

      <div className="card experienceCard">
        <div className="inputPair inputCompanyName">
          <label className="inputFor" htmlFor="companyName">
            Company Name
          </label>
          <input className="inputBox" type="text" id="companyName" />
        </div>
        <div className="inputPair inputPositionTitle">
          <label className="inputFor" htmlFor="positionTitle">
            Position Title
          </label>
          <input className="inputBox" type="text" id="positionTitle" />
        </div>
        <div className="inputPair inputStartDate">
          <label className="inputFor" htmlFor="startDate">
            Start Date
          </label>
          <input className="inputBox" type="text" id="startDate" />
        </div>
        <div className="inputPair inputEndDate">
          <label className="inputFor" htmlFor="endDate">
            End Date
          </label>
          <input className="inputBox" type="text" id="endDate" />
        </div>
        <div className="inputPair inputLocation">
          <label className="inputFor" htmlFor="location">
            Location
          </label>
          <input className="inputBox" type="text" id="location" />
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
