import { useContext } from "react";
import { NavContext } from "../../../contexts/NavContext";
import ChevronIcon from "./ChevronIcon";

export default function DropdownTitle({ id, children }) {
  const { showDropdown } = useContext(NavContext);

  const style =
    showDropdown === id
      ? "opacity-100 shadow ring ring-inset ring-1 ring-gray-100 rounded-lg"
      : "opacity-70";

  return (
    <div className={`${style} px-2 py-4 cursor-default`}>
      {children}
      <ChevronIcon direction="down" id={id} />
    </div>
  );
}
