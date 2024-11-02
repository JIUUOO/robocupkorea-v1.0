import { useContext, useLayoutEffect } from "react";
import { NavContext } from "../contexts/NavContext";
import { useLocation } from "react-router-dom";

export default function CloseNav() {
  const { setShowDropdown, setShowChildDropdown, setMobileNavOpen } =
    useContext(NavContext);

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    setShowDropdown(null);
    setShowChildDropdown(null);
    setMobileNavOpen(false);
  }, [setShowDropdown, setShowChildDropdown, setMobileNavOpen, pathname]);

  return null;
}
