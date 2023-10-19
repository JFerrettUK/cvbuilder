/* eslint-disable react/prop-types */
import trash from "/trash.svg";
import DeleteTab from "./DeleteTab.jsx";
import edit from "/edit.svg";
import EditExpTab from "./EditExpTab.jsx";

function ExperienceTab({
  companyName,
  id,
  experienceEntries,
  setExperienceEntries,
  experienceData,

  setExperienceData,
  setCompany,
  setTitle,
  setStart,
  setEnd,
  setLocation,
  setDescription,
  setCount,
  count,
}) {
  const handleDeleteClick = () => {
    DeleteTab(id);
  };

  const handleEditClick = () => {
    EditExpTab(
      id,
      experienceEntries,
      setExperienceEntries,
      experienceData,
      setExperienceData,
      setCompany,
      setTitle,
      setStart,
      setEnd,
      setLocation,
      setDescription,
      setCount,
      count
    );
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
