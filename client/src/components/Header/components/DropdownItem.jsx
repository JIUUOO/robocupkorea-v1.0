import { Link } from "react-router-dom";

export default function DropdownItem({ to, children }) {
  return (
    <Link
      to={to}
      className="py-1 md:px-3 md:block md:opacity-70 md:hover:opacity-100 transition ease duration-200 dropdown__item"
    >
      {children}
    </Link>
  );
}
