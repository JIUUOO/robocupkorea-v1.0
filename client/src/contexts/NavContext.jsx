import { createContext, useState } from "react";

export const NavContext = createContext();

export default function NavProvider({ children }) {
  const [showDropdown, setShowDropdown] = useState(null);
  const [showChildDropdown, setShowChildDropdown] = useState(null);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <NavContext.Provider
      value={{
        showDropdown,
        setShowDropdown,
        showChildDropdown,
        setShowChildDropdown,
        isMobileNavOpen,
        setMobileNavOpen,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}
