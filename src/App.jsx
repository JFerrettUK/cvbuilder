import { useState } from "react";
import idCard from "/idCard.svg";
import person from "/person.svg";
import school from "/school.svg";
import trash from "/trash.svg";
import nav from "/nav.svg";
import call from "/call.svg";
import briefcase from "/briefcase.svg";
import plus from "/plus.svg";
import mail from "/mail.svg";
import ProfileInputs from "./ProfileInputs";
import EducationInputs from "./EducationInputs";
import ExperienceInputs from "./ExperienceInputs";
import CVLayout from "./CVLayout.jsx";
import "./App.css";
import down from "/down.svg";

function App() {
  const [count, setCount] = useState(0);

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
            <h2>Profile Information</h2>
            <div className="holdInputs">
              <ProfileInputs />
            </div>
          </div>
          <div className="educationCont sectionCont">
            <div className="eduHeader">
              <h2>
                Education <img className="downIcon" src={down} alt="dropdown" />
              </h2>
            </div>
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
          <CVLayout />
        </div>
      </div>
    </>
  );
}

export default App;
