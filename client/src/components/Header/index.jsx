import { useContext, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { PATH } from "../../routes/path";
import { NavigationContext } from "../../contexts/NavigationContext";
import { BreakpointContext } from "../../contexts/BreakpointContext";
import MobileIcon from "./components/MobileIcon";
import MainMenuItemList from "./components/MainMenuItemList";
import MainMenuHead from "./components/MainMenuHead";
import MainMenuWrapper from "./components/MainMenuWrapper";
import SubMenuItemList from "./components/SubMenuItemList";
import SubMenuHead from "./components/SubMenuHead";
import SubMenuWrapper from "./components/SubMenuList";
import MenuItem from "./components/MenuItem";
import "../../styles/Header.css";

function LanguageSelectButton() {
  const { i18n } = useTranslation();

  const style =
    "cursor-pointer md:py-3 md:px-2 mr-2 hover:md:rounded-lg hover:md:shadow hover:md:bg-zinc-200";

  return (
    <>
      <div
        className={`${
          i18n.language === "ko" ? "opacity-60" : "opacity-40"
        } ${style}`}
        onClick={() => i18n.changeLanguage("ko")}
      >
        KOR
      </div>
      <div
        className={`${
          i18n.language === "en" ? "opacity-60" : "opacity-40"
        } ${style}`}
        onClick={() => i18n.changeLanguage("en")}
      >
        ENG
      </div>
    </>
  );
}

export default function Header() {
  const { t } = useTranslation();

  const {
    expandMainMenu,
    setExpandMainMenu,
    setExpandSubMenu,
    toggleModal,
    setToggleModal,
  } = useContext(NavigationContext);
  const { isMobileView, isDesktopView } = useContext(BreakpointContext);
  const [styleMenuWrapper, setStyleMenuWrapper] = useState(null);

  const handleClickMainMenu = (name) =>
    isMobileView && setExpandMainMenu(expandMainMenu === name ? null : name);

  const handleAboveMainMenu = (name) =>
    isDesktopView && setExpandMainMenu(name);

  const handleAboveSubMenu = (name) => isDesktopView && setExpandSubMenu(name);

  const handleClickModal = () => {
    setExpandMainMenu(null);
    setToggleModal(!toggleModal);
  };

  useLayoutEffect(() => {
    if (toggleModal) {
      // mobile sized
      setStyleMenuWrapper(
        "max-md:container max-md:absolute max-md:left-1/2 max-md:translate-x-[-50%] max-md:px-4 max-md:h-[calc(100vh)] max-md:pb-20 max-md:overflow-y-scroll max-md:bg-white md:inherit md:flex md:flex-row md:h-full transition-opacity ease duration-200"
      );
    } else {
      // desktop sized
      setStyleMenuWrapper(
        "max-md:absolute max-md:w-0 max-md:h-0 max-md:overflow-hidden max-md:opacity-0 md:flex md:flex-row md:h-full"
      );
    }
  }, [toggleModal]);

  return (
    // prettier-ignore
    <header className="fixed top-0 w-full h-16 md:h-20 z-10 border-b bg-white">
      <div className="container h-full">
        <div className="flex flex-row justify-between items-center h-full">
          <nav className="flex flex-row items-center h-full w-full">
            <div className="mr-16">
              <Link to={PATH.HOME}>
                <img
                  src="/logos/RCKA.png"
                  className="h-12 md:h-14"
                  alt="rcka"
                />
              </Link>
            </div>
            <div
              className={
                toggleModal && isMobileView
                  ? "max-md:absolute max-md:w-screen max-md:bg-white max-md:top-full max-md:left-1/2 max-md:translate-x-[-50%] max-md:h-[calc(100vh-100%)] max-md:overflow-y-srcoll"
                  : "max-md:invisible md:h-full md:flex md:justify-between md:w-full"
              }
            >
              <ul className={styleMenuWrapper}>
                <MainMenuWrapper handler={handleAboveMainMenu} id="RCKA">
                  <MainMenuHead onClick={handleClickMainMenu} id="RCKA" title={t("header.rcka")} />
                  <MainMenuItemList id="RCKA">
                    <MenuItem to={PATH.ABOUT} title={"소개"} />
                    <MenuItem to={PATH.COMMITTEE} title={"운영위원"} />
                    <MenuItem to={PATH.SPONSOR} title={"후원 안내"} />
                  </MainMenuItemList>
                </MainMenuWrapper>
                <MainMenuWrapper handler={handleAboveMainMenu} id="LEAGUES">
                  <MainMenuHead onClick={handleClickMainMenu} id="LEAGUES" title={t("header.league")} />
                  <MainMenuItemList id="LEAGUES" className="leagues">
                    <SubMenuWrapper handler={handleAboveSubMenu} id="JUNIOR">
                      <SubMenuHead to={PATH.LEAGUES_JUNIOR} id="JUNIOR" title={"RoboCupJunior"} />
                      <SubMenuItemList id="JUNIOR">
                        <MenuItem to={PATH.LEAGUES_JUNIOR_SOCCER} title={"Soccer"} />
                        <MenuItem to={PATH.LEAGUES_JUNIOR_ONSTAGE} title={"OnStage"} />
                        <MenuItem to={PATH.LEAGUES_JUNIOR_RESCUE} title={"Rescue"} />
                      </SubMenuItemList>
                    </SubMenuWrapper>
                    <SubMenuWrapper handler={handleAboveSubMenu} id="SOCCER">
                      <SubMenuHead to={PATH.LEAGUES_SOCCER} id="SOCCER" title={"RoboCupSoccer"} />
                      <SubMenuItemList id="SOCCER">
                        <MenuItem to={PATH.LEAGUES_SOCCER_HUMANOID} title={"Humanoid"} />
                        <MenuItem to={PATH.LEAGUES_SOCCER_STANDARD_PLATFORM} title={"Standard Platform"} />
                        <MenuItem to={PATH.LEAGUES_SOCCER_MIDDLE_SIZE} title={"Middle Size"} />
                        <MenuItem to={PATH.LEAGUES_SOCCER_SMALL_SIZE} title={"Small Size"} />
                        <MenuItem to={PATH.LEAGUES_SOCCER_SIMULATION} title={"Simulation"} />
                      </SubMenuItemList>
                    </SubMenuWrapper>
                    <SubMenuWrapper handler={handleAboveSubMenu} id="RESCUE">
                      <SubMenuHead to={PATH.LEAGUES_RESCUE} id="RESCUE" title={"RoboCupRescue"} />
                      <SubMenuItemList id="RESCUE">
                        <MenuItem to={PATH.LEAGUES_RESCUE_ROBOT} title={"Robot"} />
                        <MenuItem to={PATH.LEAGUES_RESCUE_SIMULATION} title={"Simulation"} />
                      </SubMenuItemList>
                    </SubMenuWrapper>
                    <SubMenuWrapper handler={handleAboveSubMenu} id="ATHOME">
                      <SubMenuHead to={PATH.LEAGUES_ATHOME} id="ATHOME" title={"RoboCup@Home"} />
                      <SubMenuItemList id="ATHOME">
                        <MenuItem to={PATH.LEAGUES_ATHOME_OPEN_PLATFORM} title={"Open Platform"} />
                        <MenuItem to={PATH.LEAGUES_ATHOME_DOMESTIC_STANDARD_PLATFORM} title={"Domestic Standard Platform"} />
                        <MenuItem to={PATH.LEAGUES_ATHOME_SOCIAL_STANDARD_PLATFORM} title={"Social Standard Platform"} />
                      </SubMenuItemList>
                    </SubMenuWrapper>
                    <SubMenuWrapper handler={handleAboveSubMenu} id="INDUSTRIAL">
                      <SubMenuHead to={PATH.LEAGUES_INDUSTRIAL} id="INDUSTRIAL" title={"RoboCupIndustrial"} />
                      <SubMenuItemList id="INDUSTRIAL">
                        <MenuItem to={PATH.LEAGUES_INDUSTRIAL_ROBOCUP_ATWORK} title={"RoboCup@Work"} />
                        <MenuItem to={PATH.LEAGUES_INDUSTRIAL_LOGISTICS} title={"Logistics"} />
                      </SubMenuItemList>
                    </SubMenuWrapper>
                  </MainMenuItemList>
                </MainMenuWrapper>
                <MainMenuWrapper handler={handleAboveMainMenu} id="EVENTS">
                  <MainMenuHead onClick={handleClickMainMenu} id="EVENTS" title={t("header.event")} />
                  <MainMenuItemList id="EVENTS">
                    <MenuItem to={PATH.EVENTS_LATEST} title={"제 5회 한국창의코딩대회"} />
                    <MenuItem to={PATH.EVENTS_ARCHIVE} title={"이벤트 아카이브"} />
                  </MainMenuItemList>
                </MainMenuWrapper>
                <MainMenuWrapper handler={handleAboveMainMenu} id="NOTICE">
                  <MainMenuHead onClick={handleClickMainMenu} id="NOTICE" title={t("header.notice")} />
                  <MainMenuItemList id="NOTICE">
                    <MenuItem to={PATH.NOTICE_EVENTS} title={"이벤트 소식"} />
                    <MenuItem to={PATH.NOTICE_RULES} title={"리그 규정"} />
                  </MainMenuItemList>
                </MainMenuWrapper>
                <li className={`${isMobileView ? "dropdown__head" : ""} flex px-1 py-[9px] md:hidden`}>
                  <LanguageSelectButton />
                </li>
              </ul>
              <div className={`${isDesktopView ? "" : "hidden"} h-full flex items-center pl-2`}>
                <LanguageSelectButton />
              </div>
            </div>
          </nav>
          <div className="flex justify-center align-center md:hidden h-full w-5">
            <MobileIcon onClick={handleClickModal} />
          </div>
        </div>
      </div>
    </header>
  );
}
