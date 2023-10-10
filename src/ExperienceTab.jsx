/* eslint-disable react/prop-types */
import trash from "/trash.svg";
import DeleteTab from "./DeleteTab.jsx";
import edit from "/edit.svg";

function ExperienceTab({ companyName, id }) {
  const handleDeleteClick = () => {
    console.log("Delete button clicked");
    DeleteTab(id);
  };

  const handleEditClick = () => {
    console.log("Edit button clicked");
  };

  return (
    <div className={`experienceTab ${id}`}>
      <div className="tabTitle">{companyName}</div>
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

export default ExperienceTab;
