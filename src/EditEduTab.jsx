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
    return educationEntries.filter((item) => item.id === id)[0];
  };

  const result = findObjectById(id);

  // Set values to the form fields
  setSchool(result.school);
  setDegree(result.degree);
  setStart(result.start);
  setEnd(result.end);
  setLocation(result.location);
  setDescription(result.description);

  // Delete the old tab after setting values
  // Use setTimeout to ensure that state updates have completed
  setTimeout(() => {
    DeleteTab(id);
  }, 0);
}

export default editEduTab;
