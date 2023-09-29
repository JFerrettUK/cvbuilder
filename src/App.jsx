import { useState } from "react";
import ProfileInputs from "./ProfileInputs";
import EducationInputs from "./EducationInputs";
import ExperienceInputs from "./ExperienceInputs";
import CVLayout from "./CVLayout.jsx";
import "./App.css";
import down from "/down.svg";
import ToggleInput from "./ToggleInput.jsx";

function App() {
  const [profileData, setProfileData] = useState({
    name: "Homer Simpson",
    email: "homersimpson@gmail.com",
    city: "Springfield, USA",
    phone: "555-7334",
  });
  const [experienceData, setExperienceData] = useState({
    company: "Springfield Nuclear Power Plany",
    title: "Safety Inspector Person",
    start: "04/1992",
    end: "Present",
    location: "Springfield, USA",
    description:
      "I worked at the Springfield Nuclear Power Plant, where I, um, made sure stuff didn't go kablooey. You know, nuclear doodads and all that jazz. And, I tried to keep things from blowing up and stuff.",
  });
  const [educationData, setEducationData] = useState({
    school: "Springfield University",
    degree: "Your Degree Title",
    start: "Your Start Date",
    end: "Your End Date",
    location: "Your Location",
    description: "Your Description",
  });
  const [educationEntries, setEducationEntries] = useState([]);

  const saveEducation = (educationData) => {
    setEducationEntries([...educationEntries, educationData]);
    console.log(educationEntries);
  };

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
              <ProfileInputs
                profileData={profileData}
                setProfileData={setProfileData}
              />
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
              <EducationInputs
                educationData={educationData}
                setEducationData={setEducationData}
                saveEducation={saveEducation}
              />{" "}
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
              <ExperienceInputs
                experienceData={experienceData}
                setExperienceData={setExperienceData}
              />
            </div>
          </div>
        </div>
        <div className="cvSide">
          <CVLayout profileData={profileData} />
        </div>
      </div>
    </>
  );
}

export default App;
