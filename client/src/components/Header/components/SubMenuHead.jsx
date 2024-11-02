import { useContext } from "react";
import { NavigationContext } from "../../../contexts/NavigationContext";
import ChevronIcon from "./ChevronIcon";
import { Link } from "react-router-dom";

export default function SubMenuHead({ to, id, title }) {
  const { expandSubMenu } = useContext(NavigationContext);

  const style = expandSubMenu === id ? "opacity-100" : "md:opacity-70";

  return (
    <Link
      to={to}
      className={`py-1 max-md:px-1 md:px-3.5 md:flex md:justify-between md:items-center md:font-normal cursor-default ${style} transition ease duration-200 cursor-pointer`}
    >
      {title}
      <ChevronIcon direction="right" id={id} />
    </Link>
  );
}
