import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../routes/path";
import { NavContext } from "../../contexts/NavContext";

import MobileIcon from "./components/MobileIcon";
import DropdownMenu from "./components/DropdownMenu";
import DropdownTitle from "./components/DropdownTitle";
import DropdownItem from "./components/DropdownItem";
import ChildDropdownMenu from "./components/ChildDropdownMenu";
import ChildDropdownTitle from "./components/ChildDropdownTitle";
import "../../styles/Header.css";

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
  }, [window.innerWidth]);

  useEffect(() => {
    if (isMobileNavOpen) {
      // mobile sized
      setStyleMenu(
        "max-md:container max-md:absolute max-md:left-1/2 max-md:translate-x-[-50%] max-md:px-4 max-md:h-[calc(100vh)] max-md:pb-20 max-md:overflow-y-scroll max-md:bg-white md:inherit md:flex md:flex-row md:h-full transition-opacity ease duration-200"
      );
    } else {
      // monitor sized
      setStyleMenu(
        "max-md:absolute max-md:w-0 max-md:h-0 max-md:overflow-hidden max-md:opacity-0 md:flex md:flex-row md:h-full"
      );
    }
  }, [isMobileNavOpen]);

  return (
    <header className="fixed top-0 w-full h-16 md:h-20 z-10 border-b bg-white">
      <div className="container h-full">
        <div className="flex flex-row justify-between items-center h-full">
          <nav className="flex flex-row items-center h-full">
            <div className="mr-16">
              <Link to={PATH.MAIN}>
                <img
                  src="/logos/RCKA.png"
                  className="h-12 md:h-14"
                  alt="rcka"
                />
              </Link>
            </div>
            <div
              className={
                isMobileNavOpen
                  ? "max-md:absolute max-md:w-screen max-md:bg-white max-md:top-full max-md:left-1/2 max-md:translate-x-[-50%] max-md:h-[calc(100vh-100%)] max-md:overflow-y-srcoll"
                  : "max-md:invisible md:h-full"
              }
            >
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
                      <ChildDropdownTitle to={PATH.LEAGUES_JUNIOR} id="JUNIOR">
                        RoboCupJunior
                      </ChildDropdownTitle>
                      <ChildDropdownMenu id="JUNIOR">
                        <DropdownItem to={PATH.LEAGUES_JUNIOR_SOCCER}>
                          Soccer
                        </DropdownItem>
                        <DropdownItem to={PATH.LEAGUES_JUNIOR_ONSTAGE}>
                          OnStage
                        </DropdownItem>
                        <DropdownItem to={PATH.LEAGUES_JUNIOR_RESCUE}>
                          Rescue
                        </DropdownItem>
                      </ChildDropdownMenu>
                    </div>
                    <div
                      onMouseEnter={() => handleNestDropdownEnter("SOCCER")}
                      onMouseLeave={() => handleNestDropdownEnter(null)}
                    >
                      <ChildDropdownTitle to={PATH.LEAGUES_SOCCER} id="SOCCER">
                        RoboCupSoccer
                      </ChildDropdownTitle>
                      <ChildDropdownMenu id="SOCCER">
                        <DropdownItem to={PATH.LEAGUES_SOCCER_HUMANOID}>
                          Humanoid
                        </DropdownItem>
                        <DropdownItem
                          to={PATH.LEAGUES_SOCCER_STANDARD_PLATFORM}
                        >
                          Standard Platform
                        </DropdownItem>
                        <DropdownItem to={PATH.LEAGUES_SOCCER_MIDDLE_SIZE}>
                          Middle Size
                        </DropdownItem>
                        <DropdownItem to={PATH.LEAGUES_SOCCER_SMALL_SIZE}>
                          Small Size
                        </DropdownItem>
                        <DropdownItem to={PATH.LEAGUES_SOCCER_SIMULATION}>
                          Simulation
                        </DropdownItem>
                      </ChildDropdownMenu>
                    </div>
                    <div
                      onMouseEnter={() => handleNestDropdownEnter("RESCUE")}
                      onMouseLeave={() => handleNestDropdownEnter(null)}
                    >
                      <ChildDropdownTitle to={PATH.LEAGUES_RESCUE} id="RESCUE">
                        RoboCupRescue
                      </ChildDropdownTitle>
                      <ChildDropdownMenu id="RESCUE">
                        <DropdownItem to={PATH.LEAGUES_RESCUE_ROBOT}>
                          Robot
                        </DropdownItem>
                        <DropdownItem to={PATH.LEAGUES_RESCUE_SIMULATION}>
                          Simulation
                        </DropdownItem>
                      </ChildDropdownMenu>
                    </div>
                    <div
                      onMouseEnter={() => handleNestDropdownEnter("ATHOME")}
                      onMouseLeave={() => handleNestDropdownEnter(null)}
                    >
                      <ChildDropdownTitle to={PATH.LEAGUES_ATHOME} id="ATHOME">
                        RoboCup@Home
                      </ChildDropdownTitle>
                      <ChildDropdownMenu id="ATHOME">
                        <DropdownItem to={PATH.LEAGUES_ATHOME_OPENPLATFORM}>
                          Open Platform
                        </DropdownItem>
                        <DropdownItem
                          to={PATH.LEAGUES_ATHOME_DOMESTIC_STANDARD_PLATFORM}
                        >
                          Domestic Standard Platform
                        </DropdownItem>
                        <DropdownItem
                          to={PATH.LEAGUES_ATHOME_SOCIAL_STANDARD_PLATFORM}
                        >
                          Social Standard Platform
                        </DropdownItem>
                      </ChildDropdownMenu>
                    </div>
                    <div
                      onMouseEnter={() => handleNestDropdownEnter("INDUSTRIAL")}
                      onMouseLeave={() => handleNestDropdownEnter(null)}
                    >
                      <ChildDropdownTitle
                        to={PATH.LEAGUES_INDUSTRIAL}
                        id="INDUSTRIAL"
                      >
                        RoboCupIndustrial
                      </ChildDropdownTitle>
                      <ChildDropdownMenu id="INDUSTRIAL">
                        <DropdownItem
                          to={PATH.LEAGUES_INDUSTRIAL_ROBOCUP_ATWORK}
                        >
                          RoboCup@Work
                        </DropdownItem>
                        <DropdownItem to={PATH.LEAGUES_INDUSTRIAL_LOGISTICS}>
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
                    <DropdownItem to={PATH.EVENTS_LATEST}>
                      제 5회 한국창의코딩대회
                    </DropdownItem>
                    <DropdownItem to={PATH.EVENTS_ARCHIVE}>
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
                    <DropdownItem to={PATH.NOTICE_EVENTS}>
                      이벤트 소식
                    </DropdownItem>
                    <DropdownItem to={PATH.NOTICE_RULES}>
                      리그 규정
                    </DropdownItem>
                  </DropdownMenu>
                </li>
              </ul>
            </div>
          </nav>
          <div className="flex justify-center align-center md:hidden h-full w-5">
            <MobileIcon onClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </header>
  );
}
