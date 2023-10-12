/* eslint-disable react/prop-types */
import trash from "/trash.svg";
import DeleteTab from "./DeleteTab.jsx";
import edit from "/edit.svg";
import EditEduTab from "./EditEduTab.jsx";

function EducationTab({
  schoolName,
  id,
  educationEntries,
  setEducationEntries,
  setEducationData,
  educationData,
  setSchool,
  setDegree,
  setStart,
  setEnd,
  setLocation,
  setDescription,
}) {
  const handleDeleteClick = () => {
    DeleteTab(id);
  };

  console.log("EducationTab id ", id);

  const handleEditClick = () => {
    console.log("Edit button clicked");
    EditEduTab(
      id,
      educationEntries,
      setEducationEntries,
      setEducationData,
      educationData,
      setSchool,
      setDegree,
      setStart,
      setEnd,
      setLocation,
      setDescription
    );
  };

  return (
    <div className={`educationTab ${id}`}>
      <div className="tabTitle">{schoolName}</div>
      <img
        className="editIcon"
        src={edit}
        alt="edit"
        onClick={handleEditClick}
      />
      <img
        className="trashIcon"
        src={trash}
        alt="delete"
        onClick={handleDeleteClick}
      />
    </div>
  );
}

export default EducationTab;
