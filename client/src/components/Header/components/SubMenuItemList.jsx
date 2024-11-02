import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "../../../contexts/NavigationContext";

export default function SubMenuItemList({ id, children }) {
  const { expandSubMenu } = useContext(NavigationContext);
  const [styleNestedDropdownMenu, SetStyleNestedDropdownMenu] = useState(
    "dropdown--nested-is-inactive"
  );

  useEffect(() => {
    const style = async () => {
      if (
        expandSubMenu === id &&
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
  }, [expandSubMenu]);

  return <div className={styleNestedDropdownMenu}>{children}</div>;
}
