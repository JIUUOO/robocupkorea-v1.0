import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../../contexts/NavContext";

export default function DropdownMenu({ id, children }) {
  const { showDropdown } = useContext(NavContext);
  const [style, setStyle] = useState("dropdown-is-inactive");

  useEffect(() => {
    if (showDropdown === id && style === "dropdown-is-inactive") {
      setStyle(
        "dropdown-is-active shadow ring ring-inset ring-1 ring-gray-100 rounded-lg"
      );
    } else if (style !== "dropdown-is-inactive") {
      setStyle("dropdown-is-inactive");
    }
    // eslint-disable-next-line
  }, [showDropdown]);

  return <div className={style}>{children}</div>;
}
