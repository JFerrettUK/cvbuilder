import trash from "/trash.svg";

function EducationTab({ schoolName }) {
  return (
    <div className="educationTab">
      <div>{schoolName}</div>
      <img className="trashIcon" src={trash} alt="delete" />
    </div>
  );
}

export default EducationTab;
