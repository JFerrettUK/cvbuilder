function RemoveSpaces(string) {
  const stringWithoutSpaces = string.replace(/\s/g, "");

  return stringWithoutSpaces;
}

export default RemoveSpaces;
