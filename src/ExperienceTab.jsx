/* eslint-disable react/prop-types */
import trash from "/trash.svg";

function ExperienceTab({ companyName }) {
  return (
    <div className="experienceTab">
      <div>{companyName}</div>
      <img className="trashIcon" src={trash} alt="delete" />
    </div>
  );
}

export default ExperienceTab;
