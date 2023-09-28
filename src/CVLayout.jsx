/* eslint-disable react/prop-types */
import nav from "/nav.svg";
import call from "/call.svg";
import mail from "/mail.svg";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";

function CVLayout({ profileData }) {
  return (
    <>
      <div className="cvBox">
        <div className="cvProfile">
          <div className="cvName">{profileData.name}</div>
          <div className="profileDetails">
            <div className="iconTextCont">
              <img className="profileIcon" src={mail} alt="mail Icon" />
              <div className="cvEmail">{profileData.email}</div>
            </div>
            <div className="iconTextCont">
              <img className="profileIcon" src={call} alt="Call Icon" />
              <div className="cvPhone">{profileData.phone}</div>
            </div>
            <div className="iconTextCont">
              <img className="profileIcon" src={nav} alt="Nav Icon" />
              <div className="cvCity">{profileData.city}</div>
            </div>
          </div>
        </div>
        <div className="cvSubHeader">Education</div>
        <EducationInfo
          eduDate="1988-1992"
          eduLocation="Springfield, USA"
          eduSchool="Springfield University"
          eduDegree="Nuclear Physics"
          eduDescription="Developed a unique approach to safety involving a bunch of signs and elaborate escape plans."
        />
        <div className="cvSubHeader">Professional Experience</div>
        <ExperienceInfo
          profDate="04/1992 - Present"
          profLocation="Springfield, USA"
          profCompany="Springfield Nuclear Power Plant"
          profTitle="Safety Inspector Person"
          profDescription="I worked at the Springfield Nuclear Power Plant, where I, um, made sure stuff didn't go kablooey. You know, nuclear doodads and all that jazz. And, I tried to keep things from blowing up and stuff."
        />
        <ExperienceInfo
          profDate="02/1994 - 02/1994"
          profLocation="NASA"
          profCompany="NASA"
          profTitle="Astronaut"
          profDescription="I briefly worked as an astronaut at NASA for a special mission to save the plant from a giant asteroid. I ate snacks in space, pressed the wrong button, and accidentally caused an international incident. Fortunately, everything turned out fine thanks to teamwork and the power of television."
        />
      </div>
    </>
  );
}

export default CVLayout;
