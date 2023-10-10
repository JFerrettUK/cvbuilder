function DeleteTab(className) {
  const relevantTabs = document.querySelectorAll(`.${className}`);
  console.log("Trying to remove elements with class:", className);

  relevantTabs.forEach((tab) => {
    tab.remove();
  });
}

export default DeleteTab;
