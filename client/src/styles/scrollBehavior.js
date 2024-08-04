export const handleScroll = () => {
  const element = document.querySelector(".right-position");

  if (window.innerWidth < 860) {
    element.style.position = "static";
    element.style.bottom = "auto";
    return;
  }

  const scrollTop = window.scrollY;
  const scrollThreshold = 120;

  if (scrollTop >= scrollThreshold) {
    element.style.position = "absolute";
    element.style.right = "0px";
    element.style.top = "330px";
  } else {
    element.style.position = "fixed";
    element.style.right = "0px";
    element.style.top = "210px";
  }
};

export const initializeScrollBehavior = () => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll); // Also handle resize events
};

export const cleanupScrollBehavior = () => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleScroll);
};
