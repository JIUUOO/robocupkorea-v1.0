import { useContext } from "react";
import { NavigationContext } from "../../../contexts/NavigationContext";
import ChevronIcon from "./ChevronIcon";

export default function MainMenuHead({ onClick, id, title }) {
  const { expandMainMenu } = useContext(NavigationContext);

  const style =
    expandMainMenu === id
      ? "opacity-100 md:shadow md:ring md:ring-inset md:ring-1 md:ring-gray-100 md:rounded-lg"
      : "opacity-70";

  return (
    <div
      onClick={onClick.bind(this, id)}
      className={`${style} max-md:px-1 max-md:flex max-md:items-baseline max-md:justify-between md:px-2 max-md:py-[9px] md:py-4 cursor-pointer md:cursor-default`}
    >
      {title}
      <div className="inline">
        <ChevronIcon direction="down" id={id} />
      </div>
    </div>
  );
}
