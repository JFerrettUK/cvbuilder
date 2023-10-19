/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ProfileInputs from "./ProfileInputs";
import EducationInputs from "./EducationInputs";
import ExperienceInputs from "./ExperienceInputs";
import CVLayout from "./CVLayout.jsx";
import "./App.css";
import down from "/down.svg";
import ToggleInput from "./ToggleInput.jsx";

function App() {
  // Default data for profile, experience, and education
  const defaultProfileData = {
    name: "Homer Simpson",
    email: "homersimpson@gmail.com",
    city: "Springfield, USA",
    phone: "555-7334",
  };

  const defaultExperienceData = {
    company: "Springfield Nuclear Power Plant",
    title: "Safety Inspector Person",
    start: "04/1992",
    end: "Present",
    location: "Springfield, USA",
    description:
      "I worked at the Springfield Nuclear Power Plant, where I, um, made sure stuff didn't go kablooey. You know, nuclear doodads and all that jazz. And, I tried to keep things from blowing up and stuff.",
    id: "SpringfieldNuclearPowerPlant0",
  };

  const defaultExperienceData2 = {
    company: "NASA",
    title: "Astronaut",
    start: "02/1994",
    end: "03/1994",
    location: "Springfield, USA",
    description:
      "I briefly worked as an astronaut at NASA for a special mission to save the plant from a giant asteroid. I ate snacks in space, pressed the wrong button, and accidentally caused an international incident. Fortunately, everything turned out fine thanks to teamwork and the power of television.",
    id: "NASA1",
  };

  const defaultEducationData = {
    school: "Springfield University",
    degree: "Nuclear Physics",
    start: "1988",
    end: "1992",
    location: "Springfield, USA",
    description:
      "Developed a unique approach to safety involving a bunch of signs and elaborate escape plans.",
    id: "SpringfieldUniversity0",
  };

  // State variables to manage profile, experience, and education data
  const [profileData, setProfileData] = useState(defaultProfileData);
  const [experienceData, setExperienceData] = useState(defaultExperienceData);
  const [educationData, setEducationData] = useState(defaultEducationData);

  // State variables to manage entries for experience and education
  const [educationEntries, setEducationEntries] = useState([]);
  const [experienceEntries, setExperienceEntries] = useState([]);

  // ToggleInput state for showing/hiding education and experience sections
  const eduInput = ToggleInput();
  const expInput = ToggleInput();

  // useEffect to add default data to entries when the app first loads
  useEffect(() => {
    setEducationEntries([defaultEducationData]);
    setExperienceEntries([defaultExperienceData, defaultExperienceData2]);
  }, []);

  // Function to save education data
  const saveEducation = (educationData) => {
    setEducationEntries((prevEntries) => {
      const newEntries = [...prevEntries, educationData];
      return newEntries;
    });
  };
  // Function to save experience data
  const saveExperience = (experienceData) => {
    setExperienceEntries((prevEntries) => {
      const newEntries = [...prevEntries, experienceData];
      return newEntries;
    });
  };

  useEffect(() => {
    console.log("Updated experience entries:", experienceEntries);
  }, [experienceEntries]);

  useEffect(() => {
    console.log("Updated education entries:", educationEntries);
  }, [educationEntries]);

  // JSX structure for the App component
  return (
    <>
      {/* Header section */}
      <div className="headerCont">
        <header className="headerText">
          <h1>CV Builder</h1>
          <div className="headerSub">
            Build a professional resume in minutes
          </div>
        </header>
      </div>
      {/* Main content section */}
      <div className="mainCont">
        {/* Information side containing profile, education, and experience sections */}
        <div className="infoSide">
          {/* Profile section */}
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
          {/* Education section */}
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
                educationEntries={educationEntries}
                setEducationEntries={setEducationEntries}
              />
            </div>
          </div>
          {/* Experience section */}
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
                saveExperience={saveExperience}
                experienceEntries={experienceEntries}
                setExperienceEntries={setExperienceEntries}
              />
            </div>
          </div>
        </div>
        {/* CV side containing the layout */}
        <div className="cvSide">
          <CVLayout
            profileData={profileData}
            educationEntries={educationEntries}
            experienceEntries={experienceEntries}
          />{" "}
        </div>
      </div>
    </>
  );
}

export default App;
