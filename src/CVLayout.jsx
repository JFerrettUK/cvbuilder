/* eslint-disable react/prop-types */
import nav from "/nav.svg";
import call from "/call.svg";
import mail from "/mail.svg";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";

function CVLayout({ profileData, educationEntries, experienceEntries }) {
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
        {educationEntries.map((education, index) => (
          <EducationInfo
            key={index}
            eduDate={`${education.start} - ${education.end}`}
            eduLocation={education.location}
            eduSchool={education.school}
            eduDegree={education.degree}
            eduDescription={education.description}
            eduId={education.id}
          />
        ))}

        <div className="cvSubHeader">Professional Experience</div>
        {experienceEntries.map((experience, index) => (
          <ExperienceInfo
            key={index}
            profDate={`${experience.start} - ${experience.end}`}
            profLocation={experience.location}
            profCompany={experience.company}
            profTitle={experience.title}
            profDescription={experience.description}
            profId={experience.id}
          />
        ))}
      </div>
    </>
  );
}

export default CVLayout;
