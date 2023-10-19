import DeleteTab from "./DeleteTab.jsx";
import RemoveSpaces from "./RemoveSpaces.jsx";

async function editEduTab(
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
  setCount,
  count
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

  await DeleteTab(id); // Wait for deletion to complete

  // Set a new ID for the updated entry
  const newEntryId = `${RemoveSpaces(result.school)}${count}`;
  setEducationData({
    ...educationData,
    school: result.school,
    degree: result.degree,
    start: result.start,
    end: result.end,
    location: result.location,
    description: result.description,
    id: newEntryId,
  });

  // Update the education entries with the edited data
  setEducationEntries((prevEntries) => {
    const updatedEntries = prevEntries.map((entry) =>
      entry.id === id ? { ...entry, ...educationData } : entry
    );
    return updatedEntries;
  });
}

export default editEduTab;
