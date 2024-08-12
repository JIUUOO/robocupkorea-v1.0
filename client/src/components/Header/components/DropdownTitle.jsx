import { useContext } from "react";
import { NavContext } from "../../../contexts/NavContext";
import ChevronIcon from "./ChevronIcon";

export default function DropdownTitle({ id, children }) {
  const { showDropdown } = useContext(NavContext);

  const style =
    showDropdown === id
      ? "opacity-100 md:shadow md:ring md:ring-inset md:ring-1 md:ring-gray-100 md:rounded-lg"
      : "opacity-70";

  return (
    <div
      className={`${style} max-md:px-1 max-md:flex max-md:items-baseline max-md:justify-between md:px-2 md:py-4 cursor-default`}
    >
      {children}
      <div className="inline">
        <ChevronIcon direction="down" id={id} />
      </div>
    </div>
  );
}
