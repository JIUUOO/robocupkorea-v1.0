import { useContext } from "react";
import barsIcon from "../../../assets/icons/bars-solid.svg";
import timesIcon from "../../../assets/icons/times-solid.svg";
import { NavigationContext } from "../../../contexts/NavigationContext";

export default function MobileIcon({ onClick }) {
  const { toggleModal } = useContext(NavigationContext);
  const src = toggleModal ? timesIcon : barsIcon;
  return <img src={src} onClick={onClick} alt="icon" />;
}
