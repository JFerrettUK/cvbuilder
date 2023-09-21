import { useState } from "react";

function EducationInputs() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card educationCard">
        <div className="inputPair inputSchool">
          <label className="inputFor" htmlFor="school">
            School
          </label>
          <input className="inputBox" type="text" id="school" />
        </div>
        <div className="inputPair inputDegree">
          <label className="inputFor" htmlFor="degree">
            Degree
          </label>
          <input className="inputBox" type="email" id="degree" />
        </div>
        <div className="inputPair inputStart">
          <label className="inputFor" htmlFor="start">
            Start Date
          </label>
          <input className="inputBox" type="text" id="start" />
        </div>
        <div className="inputPair inputEnd">
          <label className="inputFor" htmlFor="end">
            End Date
          </label>
          <input className="inputBox" type="text" id="end" />
        </div>
        <div className="inputPair inputLocation">
          <label className="inputFor" htmlFor="location">
            Location
          </label>
          <input className="inputBox" type="text" id="location" />
        </div>
      </div>
      <div className="buttonCont">
        <button type="submit" className="editButton educationEdit formButton">
          Edit
        </button>
        <button type="submit" className="saveButton educationSave formButton">
          Save
        </button>
      </div>
    </>
  );
}

export default EducationInputs;
