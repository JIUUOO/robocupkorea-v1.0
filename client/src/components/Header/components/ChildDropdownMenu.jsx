import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../../contexts/NavContext";

export default function NestedDropdownMenu({ id, children }) {
  const { showChildDropdown } = useContext(NavContext);
  const [styleNestedDropdownMenu, SetStyleNestedDropdownMenu] = useState(
    "dropdown--nested-is-inactive"
  );

  useEffect(() => {
    const style = async () => {
      if (
        showChildDropdown === id &&
        styleNestedDropdownMenu === "dropdown--nested-is-inactive"
      ) {
        SetStyleNestedDropdownMenu(
          "dropdown--nested-is-active md:shadow md:ring md:ring-inset md:ring-1 md:ring-gray-100 md:rounded-lg"
        );
      } else if (styleNestedDropdownMenu !== "dropdown--nested-is-inactive") {
        SetStyleNestedDropdownMenu("dropdown--nested-is-inactive");
      }
    };

    style();
    // eslint-disable-next-line
  }, [showChildDropdown]);

  return <div className={styleNestedDropdownMenu}>{children}</div>;
}
