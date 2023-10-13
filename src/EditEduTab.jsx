import DeleteTab from "./DeleteTab.jsx";

function editEduTab(
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
) {
  const findObjectById = (id) => {
    console.log("id in EditEduTab", id);
    return educationEntries.filter((item) => item.id === id)[0];
  };

  const result = findObjectById(id);

  setSchool(result.school);
  setDegree(result.degree);
  setStart(result.start);
  setEnd(result.end);
  setLocation(result.location);
  setDescription(result.description);

  setTimeout(() => {
    DeleteTab(id);
  }, 0);
}

export default editEduTab;
