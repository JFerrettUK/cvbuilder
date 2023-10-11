function DeleteTab(className) {
  const relevantTabs = document.querySelectorAll(`.${className}`);
  relevantTabs.forEach((tab) => {
    tab.remove();
  });
}

export default DeleteTab;
