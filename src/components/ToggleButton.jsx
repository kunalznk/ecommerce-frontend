import { IconButton } from "@material-tailwind/react";
import { useState } from "react";

const ToggleButton = ({ Active, Inactive, onToggle }) => {
  const [toggle, setToggle] = useState(false);

  function HandleClick() {
    setToggle(!toggle);
    onToggle();
  }
  return (
    <IconButton className="h-full w-full bg-black" onClick={HandleClick}>
      {toggle ? <Active /> : <Inactive />}
    </IconButton>
  );
};

export default ToggleButton;
