import { useContext, useLayoutEffect } from "react";
import { NavigationContext } from "../contexts/NavigationContext";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CloseNavigation() {
  const { i18n } = useTranslation();

  const { setExpandMainMenu, setExpandSubMenu, setToggleModal } =
    useContext(NavigationContext);

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    setExpandMainMenu(null);
    setExpandSubMenu(null);
    setToggleModal(false);
  }, [
    setExpandMainMenu,
    setExpandSubMenu,
    setToggleModal,
    pathname,
    i18n.language,
  ]);

  return null;
}
