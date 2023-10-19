import DeleteTab from "./DeleteTab.jsx";
import RemoveSpaces from "./RemoveSpaces.jsx";

async function editExpTab(
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
) {
  const findObjectById = (id) => {
    console.log("id in EditExpTab", id);
    return experienceEntries.filter((item) => item.id === id)[0];
  };

  const result = findObjectById(id);

  setCompany(result.company);
  setTitle(result.title);
  setStart(result.start);
  setEnd(result.end);
  setLocation(result.location);
  setDescription(result.description);

  await DeleteTab(id); // Wait for deletion to complete

  // Set a new ID for the updated entry
  const newEntryId = `${RemoveSpaces(result.company)}${count}`;
  setExperienceData({
    ...experienceData,
    company: result.company,
    title: result.title,
    start: result.start,
    end: result.end,
    location: result.location,
    description: result.description,
    id: newEntryId,
  });

  // Update the education entries with the edited data
  setExperienceEntries((prevEntries) => {
    const updatedEntries = prevEntries.map((entry) =>
      entry.id === id ? { ...entry, ...experienceData } : entry
    );
    return updatedEntries;
  });
}

export default editExpTab;
