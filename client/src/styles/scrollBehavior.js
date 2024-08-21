export const handleScroll = () => {
  const element = document.querySelector(".right-position");

  if (window.innerWidth < 860) {
    element.style.position = "static";
    element.style.bottom = "auto";
    return;
  }

  const scrollTop = window.scrollY;
  const scrollThreshold = window.innerWidth < 1024 ? 180 : 350;

  if (scrollTop >= scrollThreshold) {
    element.style.position = "absolute";
    element.style.right = "0px";
    element.style.top = `${150+scrollThreshold}px`;
  } else {
    element.style.position = "fixed";
    element.style.right = "0px";
    element.style.top = "150px";
  }
};

export const initializeScrollBehavior = () => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
};

export const cleanupScrollBehavior = () => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleScroll);
};
