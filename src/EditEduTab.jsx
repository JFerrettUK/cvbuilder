//break it down into steps:
function editEduTab(id, educationEntries, setEducationEntries) {
  //user presses press the edit button
  //get the relevant class 'id' from the tab that was clicked
  console.log(id);
  console.log(educationEntries);
  console.log(setEducationEntries);

  //filter the arrays from App.jsx (EducationData) to find an entry with the same id
  //the data from that id appears in each of the following fields:
  //school
  //degree
  //start
  //end
  //location
  //description
  //then, the save button now changes to say "edit".
  //Instead of saving a new entry, it saves over the data found from EducationData,
  //enduring the ID isn't changed and its placement in the array is the same
  //the save button returns to its functionality from the start
}

export default editEduTab;
