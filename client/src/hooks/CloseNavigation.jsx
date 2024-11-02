import { useContext, useLayoutEffect } from "react";
import { NavigationContext } from "../contexts/NavigationContext";
import { useLocation } from "react-router-dom";

export default function CloseNavigation() {
  const { setExpandMainMenu, setExpandSubMenu, setToggleModal } =
    useContext(NavigationContext);

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    setExpandMainMenu(null);
    setExpandSubMenu(null);
    setToggleModal(false);
  }, [setExpandMainMenu, setExpandSubMenu, setToggleModal, pathname]);

  return null;
}
