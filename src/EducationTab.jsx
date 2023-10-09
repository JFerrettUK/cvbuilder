/* eslint-disable react/prop-types */
import trash from "/trash.svg";

function EducationTab({ schoolName, id }) {
  return (
    <div className={`educationTab ${id}`}>
      <div>{schoolName}</div>
      <img className="trashIcon" src={trash} alt="delete" />
    </div>
  );
}

export default EducationTab;
