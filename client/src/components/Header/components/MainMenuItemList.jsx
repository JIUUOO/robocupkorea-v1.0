import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "../../../contexts/NavigationContext";

export default function MainMenuItemList({ id, children }) {
  const { expandMainMenu } = useContext(NavigationContext);
  const [style, setStyle] = useState("dropdown-is-inactive");

  useEffect(() => {
    if (expandMainMenu === id && style === "dropdown-is-inactive") {
      setStyle(
        "dropdown-is-active max-md:pb-2 md:shadow md:ring md:ring-inset md:ring-1 md:ring-gray-100 md:rounded-lg"
      );
    } else if (style !== "dropdown-is-inactive") {
      setStyle("dropdown-is-inactive");
    }
    // eslint-disable-next-line
  }, [expandMainMenu]);

  return <div className={style}>{children}</div>;
}
