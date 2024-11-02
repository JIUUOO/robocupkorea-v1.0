import { createContext, useState } from "react";

export const NavigationContext = createContext();

export default function NavigationProvider({ children }) {
  const [expandMainMenu, setExpandMainMenu] = useState(null);
  const [expandSubMenu, setExpandSubMenu] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);

  const value = {
    expandMainMenu: expandMainMenu,
    setExpandMainMenu: setExpandMainMenu,
    expandSubMenu: expandSubMenu,
    setExpandSubMenu: setExpandSubMenu,
    toggleModal: toggleModal,
    setToggleModal: setToggleModal,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
