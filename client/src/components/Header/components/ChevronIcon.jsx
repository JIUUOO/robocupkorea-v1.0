import { useContext } from "react";
import { NavContext } from "../../../contexts/NavContext";
import chevronDown from "../../../assets/icons/chevron-down-solid.svg";
import chevronRight from "../../../assets/icons/chevron-right-solid.svg";

export default function ChevronIcon({ direction, id }) {
  const { showDropdown, showChildDropdown } = useContext(NavContext);

  const style =
    showDropdown === id || showChildDropdown === id
      ? "opacity-100"
      : "opacity-70";

  if (direction === "down") {
    return (
      <img
        src={chevronDown}
        className={`inline mb-1 pl-1 h-3 ${style} transition ease duration-200`}
        alt="chevronDown"
      ></img>
    );
  } else if (direction === "right") {
    return (
      <img
        src={chevronRight}
        className={`inline pl-3 h-3 ${style} transition ease duration-200 hidden md:inline`}
        alt="chevronRight"
      ></img>
    );
  }
}
