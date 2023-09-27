import { useState } from "react";
import ProfileInputs from "./ProfileInputs";
import EducationInputs from "./EducationInputs";
import ExperienceInputs from "./ExperienceInputs";
import CVLayout from "./CVLayout.jsx";
import "./App.css";
import down from "/down.svg";
import ToggleInput from "./ToggleInput.jsx";

function App() {
  const [count, setCount] = useState(0);
  const eduInput = ToggleInput();
  const expInput = ToggleInput();

  return (
    <>
      <div className="headerCont">
        <header className="headerText">
          <h1>CV Builder</h1>
          <div className="headerSub">
            Build a professional resume in minutes
          </div>
        </header>
      </div>
      <div className="mainCont">
        <div className="infoSide">
          <div className="profileCont sectionCont">
            <div className="profileHeaderBg">
              <div className="headerExpand">Profile Information </div>
            </div>
            <div className="holdInputs">
              <ProfileInputs />
            </div>
          </div>
          <div className="educationCont sectionCont">
            <div className="inputHeaderBg">
              <div className="headerExpand" onClick={eduInput.toggle}>
                Education <img className="downIcon" src={down} alt="dropdown" />
              </div>
            </div>
            <div
              style={{ display: eduInput.isHidden ? "none" : "block" }}
              className="holdInputs"
            >
              <EducationInputs />
            </div>
          </div>
          <div className="experienceCont sectionCont">
            <div className="inputHeaderBg">
              <div className="headerExpand" onClick={expInput.toggle}>
                Experience{" "}
                <img className="downIcon" src={down} alt="dropdown" />
              </div>
            </div>
            <div
              style={{ display: expInput.isHidden ? "none" : "block" }}
              className="holdInputs"
            >
              <ExperienceInputs />
            </div>
          </div>
        </div>
        <div className="cvSide">
          <CVLayout />
        </div>
      </div>
    </>
  );
}

export default App;
