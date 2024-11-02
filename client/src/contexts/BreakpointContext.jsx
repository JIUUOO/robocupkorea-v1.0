import { createContext, useState, useLayoutEffect } from "react";

export const BreakpointContext = createContext();

export default function BreakpointProvider({ children }) {
  const mobileBreakpoint = 768;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [isMobileView, setIsMobileView] = useState(
    window.innerWidth < mobileBreakpoint
  );
  const [isDesktopView, setIsDesktopView] = useState(
    window.innerWidth >= mobileBreakpoint
  );

  useLayoutEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);

      setIsMobileView(window.innerWidth < mobileBreakpoint);
      setIsDesktopView(window.innerWidth >= mobileBreakpoint);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, [window.innerWidth]);

  const value = {
    innerWidth: innerWidth,
    isMobileView: isMobileView,
    isDesktopView: isDesktopView,
  };

  return (
    <BreakpointContext.Provider value={value}>
      {children}
    </BreakpointContext.Provider>
  );
}
