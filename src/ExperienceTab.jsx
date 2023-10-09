/* eslint-disable react/prop-types */
import trash from "/trash.svg";

function ExperienceTab({ companyName, id }) {
  return (
    <div className={`experienceTab ${id}`}>
      <div>{companyName}</div>
      <img className="trashIcon" src={trash} alt="delete" />
    </div>
  );
}

export default ExperienceTab;
