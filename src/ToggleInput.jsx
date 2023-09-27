import { useState } from "react";

function ToggleInput() {
  const [isHidden, setIsHidden] = useState(true);

  function toggle() {
    setIsHidden(!isHidden);
  }

  return {
    isHidden,
    toggle,
  };
}

export default ToggleInput;
