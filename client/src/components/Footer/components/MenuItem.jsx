import { Link } from "react-router-dom";

export default function MenuItem({ to, children }) {
  return (
    <div className="pb-1">
      <Link
        to={to}
        className="text-sm font-light hover:underline underline-offset-4"
      >
        {children}
      </Link>
    </div>
  );
}
