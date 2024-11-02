import { Link } from "react-router-dom";

export default function MenuItem({ to, title }) {
  return (
    <div className="md:opacity-70 md:hover:opacity-100 transition ease duration-200">
      <Link
        to={to}
        className="py-1 max-md:px-1 md:px-3 inline-block md:block font-light"
      >
        {title}
      </Link>
    </div>
  );
}
