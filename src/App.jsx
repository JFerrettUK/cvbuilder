import { useState } from "react";
import trashOutline from "/trash-outline.svg";
import ProfileInputs from "./ProfileInputs";
import EducationInputs from "./EducationInputs";
import ExperienceInputs from "./ExperienceInputs";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>CV Application</h1>
      <div className="mainCont">
        <div className="infoSide">
          <div className="profileCont sectionCont">
            <h2>Profile Information</h2>
            <div className="holdInputs">
              <ProfileInputs />
            </div>
          </div>
          <div className="educationCont sectionCont">
            <h2>Education</h2>
            <div className="holdInputs">
              <EducationInputs />
            </div>
          </div>
          <div className="experienceCont sectionCont">
            <h2>Experience</h2>
            <ExperienceInputs />
          </div>
        </div>
        <div className="cvSide">
          <div className="cvBox">
            <h2>Preview</h2>
            <div>
              <p>Working CV goes here</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
