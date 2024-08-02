import { useContext } from "react";
import { NavContext } from "../../../contexts/NavContext";
import ChevronIcon from "./ChevronIcon";

export default function NestedDropdownTitle({ id, children }) {
  const { showChildDropdown } = useContext(NavContext);

  const style = showChildDropdown === id ? "opacity-100" : "md:opacity-70";

  return (
    <div
      className={`py-1 md:px-3.5 md:flex md:justify-between md:items-center cursor-default ${style} transition ease duration-200`}
    >
      {children}
      <ChevronIcon direction="right" id={id} />
    </div>
  );
}
