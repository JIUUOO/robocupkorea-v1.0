import { useContext } from "react";
import barsIcon from "../../../assets/icons/bars-solid.svg";
import timesIcon from "../../../assets/icons/times-solid.svg";
import { NavContext } from "../../../contexts/NavContext";

export default function MobileIcon({ onClick }) {
  const { isMobileNavOpen } = useContext(NavContext);
  const src = isMobileNavOpen ? timesIcon : barsIcon;
  return <img src={src} onClick={onClick} alt="icon" />;
}
