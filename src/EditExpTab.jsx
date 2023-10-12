import DeleteTab from "./DeleteTab.jsx";

function editExpTab(
  id,
  experienceEntries,
  setCompany,
  setTitle,
  setStart,
  setEnd,
  setLocation,
  setDescription
) {
  const findObjectById = (id) => {
    return experienceEntries.filter((item) => item.id === id)[0];
  };

  const result = findObjectById(id);

  // Set values to the form fields
  setCompany(result.company);
  setTitle(result.title);
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

export default editExpTab;
