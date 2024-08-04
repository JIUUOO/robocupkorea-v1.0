import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scroll(0, 0);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  window.onbeforeunload = scrollToTop;

  useEffect(() => {
    scrollToTop();
    console.log(window.scrollY);
  }, [pathname]);

  return null;
}
