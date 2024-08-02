import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../routes/path";
import rcka from "../../assets/logos/RCKA.png";
import "./styles.css";
import DropdownMenu from "./components/DropdownMenu";
import DropdownItem from "./components/DropdownItem";
import MobileIcon from "./components/MobileIcon";
import { NavContext } from "../../contexts/NavContext";
import ChildDropdownMenu from "./components/ChildDropdownMenu";
import ChildDropdownTitle from "./components/ChildDropdownTitle";
import DropdownTitle from "./components/DropdownTitle";

export default function Header() {
  const {
    showDropdown,
    setShowDropdown,
    setShowChildDropdown,
    isMobileNavOpen,
    setMobileNavOpen,
  } = useContext(NavContext);
  const [styleMenu, setStyleMenu] = useState("hidden");
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  // only on monitor
  const handleDropdownEnter = (name) =>
    innerWidth >= 768 && setShowDropdown(name);

  // only on mobile
  const handleDropdownClick = (name) =>
    innerWidth < 768 && setShowDropdown(showDropdown === name ? null : name);

  const handleNestDropdownEnter = (name) =>
    innerWidth >= 768 && setShowChildDropdown(name);

  const handleButtonClick = () => {
    setShowDropdown(null);
    setMobileNavOpen(!isMobileNavOpen);
  };

  // whether to verify on mobile or desktop
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);

      // when the window is resized to the desktop, then close it
      innerWidth >= 768 && setShowDropdown(null);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isMobileNavOpen) {
      setStyleMenu("menu-is-mobile");
    } else {
      setStyleMenu(
        "absolute w-0 h-0 overflow-hidden opacity-0 md:static md:flex md:flex-row md:w-auto md:h-full md:opacity-100"
      );
    }
  }, [isMobileNavOpen]);

  return (
    <header className="fixed top-0 w-full h-16 md:h-20 z-10 border-b bg-white">
      <div className="container h-full">
        <div className="flex flex-row justify-between items-center h-full">
          <nav className="flex flex-row items-center h-full">
            <div className="inline-block mr-16">
              <Link to={PATH.MAIN}>
                <img src={rcka} className="h-12 md:h-14" alt="rcka" />
              </Link>
            </div>
            <ul className={styleMenu}>
              <li
                onMouseEnter={() => handleDropdownEnter("RCKA")}
                onMouseLeave={() => handleDropdownEnter(null)}
                className="dropdown__head"
              >
                <div onClick={() => handleDropdownClick("RCKA")}>
                  <DropdownTitle id="RCKA">한국로보컵협회</DropdownTitle>
                </div>
                <DropdownMenu id="RCKA">
                  <DropdownItem to={PATH.ABOUT}>소개</DropdownItem>
                  <DropdownItem to={PATH.COMMITTEE}>운영위원</DropdownItem>
                </DropdownMenu>
              </li>
              <li
                onMouseEnter={() => handleDropdownEnter("LEAGUES")}
                onMouseLeave={() => handleDropdownEnter(null)}
                className="dropdown__head"
              >
                <div onClick={() => handleDropdownClick("LEAGUES")}>
                  <DropdownTitle id="LEAGUES">로보컵 리그</DropdownTitle>
                </div>
                <DropdownMenu id="LEAGUES" className="leagues">
                  <div
                    onMouseEnter={() => handleNestDropdownEnter("JUNIOR")}
                    onMouseLeave={() => handleNestDropdownEnter(null)}
                  >
                    <ChildDropdownTitle id="JUNIOR">
                      RoboCupJunior
                    </ChildDropdownTitle>
                    <ChildDropdownMenu id="JUNIOR">
                      <DropdownItem to={PATH.JUNIOR_SOCCER}>
                        Soccer
                      </DropdownItem>
                      <DropdownItem to={PATH.JUNIOR_ONSTAGE}>
                        OnStage
                      </DropdownItem>
                      <DropdownItem to={PATH.JUNIOR_RESCUE}>
                        Rescue
                      </DropdownItem>
                    </ChildDropdownMenu>
                  </div>
                  <div
                    onMouseEnter={() => handleNestDropdownEnter("SOCCER")}
                    onMouseLeave={() => handleNestDropdownEnter(null)}
                  >
                    <ChildDropdownTitle id="SOCCER">
                      RoboCupSoccer
                    </ChildDropdownTitle>
                    <ChildDropdownMenu id="SOCCER">
                      <DropdownItem to={PATH.SOCCER_HUMANOID}>
                        Humanoid
                      </DropdownItem>
                      <DropdownItem to={PATH.SOCCER_STANDARDPLAFORM}>
                        Standard Platform
                      </DropdownItem>
                      <DropdownItem to={PATH.SOCCER_MIDDLESIZE}>
                        Middle Size
                      </DropdownItem>
                      <DropdownItem to={PATH.SOCCER_SMALLSIZE}>
                        Small Size
                      </DropdownItem>
                      <DropdownItem to={PATH.SOCCER_SIMULATION}>
                        Simulation
                      </DropdownItem>
                    </ChildDropdownMenu>
                  </div>
                  <div
                    onMouseEnter={() => handleNestDropdownEnter("RESCUE")}
                    onMouseLeave={() => handleNestDropdownEnter(null)}
                  >
                    <ChildDropdownTitle id="RESCUE">
                      RoboCupRescue
                    </ChildDropdownTitle>
                    <ChildDropdownMenu id="RESCUE">
                      <DropdownItem to={PATH.RESCUE_ROBOT}>Robot</DropdownItem>
                      <DropdownItem to={PATH.RESCUE_SIMULATION}>
                        Simulation
                      </DropdownItem>
                    </ChildDropdownMenu>
                  </div>
                  <div
                    onMouseEnter={() => handleNestDropdownEnter("ATHOME")}
                    onMouseLeave={() => handleNestDropdownEnter(null)}
                  >
                    <ChildDropdownTitle id="ATHOME">
                      RoboCup@Home
                    </ChildDropdownTitle>
                    <ChildDropdownMenu id="ATHOME">
                      <DropdownItem to={PATH.ATHOME_OPENPLATFORM}>
                        Open Platform
                      </DropdownItem>
                      <DropdownItem to={PATH.ATHOME_DOMESTICSTANDARDPLATFORM}>
                        Domestic Standard Platform
                      </DropdownItem>
                      <DropdownItem to={PATH.ATHOME_SOCIALSTANDARDPLATFORM}>
                        Social Standard Platform
                      </DropdownItem>
                    </ChildDropdownMenu>
                  </div>
                  <div
                    onMouseEnter={() => handleNestDropdownEnter("INDUSTRIAL")}
                    onMouseLeave={() => handleNestDropdownEnter(null)}
                  >
                    <ChildDropdownTitle id="INDUSTRIAL">
                      RoboCupIndustrial
                    </ChildDropdownTitle>
                    <ChildDropdownMenu id="INDUSTRIAL">
                      <DropdownItem to={PATH.INDUSTRIAL_ROBOCUPATWORK}>
                        RoboCup@Work
                      </DropdownItem>
                      <DropdownItem to={PATH.INDUSTRIAL_LOGISTICS}>
                        Logistics
                      </DropdownItem>
                    </ChildDropdownMenu>
                  </div>
                </DropdownMenu>
              </li>
              <li
                onMouseEnter={() => handleDropdownEnter("EVENTS")}
                onMouseLeave={() => handleDropdownEnter(null)}
                className="dropdown__head"
              >
                <div onClick={() => handleDropdownClick("EVENTS")}>
                  <DropdownTitle id="EVENTS">로보컵 이벤트</DropdownTitle>
                </div>
                <DropdownMenu id="EVENTS">
                  <DropdownItem to={PATH.CHALLENGE}>
                    제 5회 한국창의코딩대회
                  </DropdownItem>
                  <DropdownItem to={PATH.CHALLENGE_ARCHIVE}>
                    이벤트 아카이브
                  </DropdownItem>
                </DropdownMenu>
              </li>
              <li
                onMouseEnter={() => handleDropdownEnter("NOTICE")}
                onMouseLeave={() => handleDropdownEnter(null)}
                className="dropdown__head"
              >
                <div onClick={() => handleDropdownClick("NOTICE")}>
                  <DropdownTitle id="NOTICE">공지사항</DropdownTitle>
                </div>
                <DropdownMenu id="NOTICE">
                  <DropdownItem to={PATH.NOTICE}>이벤트 소식</DropdownItem>
                  <DropdownItem to={PATH.NOTICE}>리그 규정</DropdownItem>
                </DropdownMenu>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center align-center md:hidden h-full w-5">
            <MobileIcon onClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </header>
  );
}
