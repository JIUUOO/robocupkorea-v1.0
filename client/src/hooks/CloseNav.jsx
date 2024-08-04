import { useContext, useEffect } from "react";
import { NavContext } from "../contexts/NavContext";
import { useLocation } from "react-router-dom";

export default function CloseNav() {
  const { setShowDropdown, setShowChildDropdown, setMobileNavOpen } =
    useContext(NavContext);

  const { pathname } = useLocation();

  useEffect(() => {
    setShowDropdown(null);
    setShowChildDropdown(null);
    setMobileNavOpen(false);
  }, [pathname]);

  return null;
}
