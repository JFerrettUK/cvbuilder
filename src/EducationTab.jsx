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
}) {
  const handleDeleteClick = () => {
    console.log("Delete button clicked");
    DeleteTab(id);
  };

  const handleEditClick = () => {
    console.log("Edit button clicked");
    EditEduTab(id, educationEntries, setEducationEntries);
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
