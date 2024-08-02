import { useContext } from "react";
import { NavContext } from "../../../contexts/NavContext";
import ChevronIcon from "./ChevronIcon";

export default function DropdownTitle({ id, children }) {
  const { showDropdown } = useContext(NavContext);

  const style = showDropdown === id ? "opacity-100" : "opacity-70";

  return (
    <div className={`${style} cursor-default`}>
      {children}
      <ChevronIcon direction="down" id={id} />
    </div>
  );
}
