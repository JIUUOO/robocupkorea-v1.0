import { Link } from "react-router-dom";
import { PATH } from "../../routes/path";
import { useTranslation } from "react-i18next";

function MenuItem({ to, children }) {
  return (
    <div className="pb-1">
      <Link to={to} className="font-light hover:underline underline-offset-3">
        {children}
      </Link>
    </div>
  );
}

export default function Footer() {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const menuStyle = "pb-4";
  const menuHeadStyle = "pb-1 font-normal";

  return (
    <footer className="mt-12">
      <div className="container">
        <div className="px-4">
          <div className="pb-8">
            <div className="flex items-center justify-between">
              <Link to={PATH.MAIN}>
                <img
                  src="/logos/RCKA.png"
                  className="inline max-md:h-12 md:h-14 mb-2 mr-4"
                  alt="RCKA.png"
                />
              </Link>
              <div className="flex">
                <a
                  href="https://www.robocup.org/"
                  className="hover:opacity-70 transition-opacity ease duration-200 mr-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="/logos/RoboCup.png"
                    className="h-10"
                    alt="RoboCup"
                  />
                </a>
                <a
                  href="https://junior.robocup.org/"
                  className="hover:opacity-70 transition-opacity ease duration-200 mr-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="/logos/RoboCupJunior.jpg"
                    className="h-10"
                    alt="RoboCupJunior"
                  />
                </a>
                <a
                  href="https://robocupap.org/"
                  className="hover:opacity-70 transition-opacity ease duration-200 mr-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src="/logos/RCAP.png" className="h-10" alt="RCAP" />
                </a>
              </div>
            </div>
            <p className="max-w-2xs break-keep font-light">
              {t("menu.rcka_about")}
            </p>
          </div>
          <ul className="grid md:grid-cols-4">
            <li className={menuStyle}>
              <div className={menuHeadStyle}>{t("menu.main.head.rcka")}</div>
              <MenuItem to={PATH.ABOUT}>{t("menu.main.item.about")}</MenuItem>
              <MenuItem to={PATH.COMMITTEE}>
                {t("menu.main.item.committee")}
              </MenuItem>
              <MenuItem to={PATH.SPONSOR}>
                {t("menu.main.item.sponser")}
              </MenuItem>
            </li>
            <li className={menuStyle}>
              <div className={menuHeadStyle}>{t("menu.main.head.leagues")}</div>
              <MenuItem to={PATH.LEAGUES_JUNIOR}>
                {t("menu.sub.head.leagues_junior")}
              </MenuItem>
              <MenuItem to={PATH.LEAGUES_SOCCER}>
                {t("menu.sub.head.leagues_soccer")}
              </MenuItem>
              <MenuItem to={PATH.LEAGUES_RESCUE}>
                {t("menu.sub.head.leagues_rescue")}
              </MenuItem>
              <MenuItem to={PATH.LEAGUES_ATHOME}>
                {t("menu.sub.head.leagues_athome")}
              </MenuItem>
              <MenuItem to={PATH.LEAGUES_INDUSTRIAL}>
                {t("menu.sub.head.leagues_industrial")}
              </MenuItem>
            </li>
            <li className={menuStyle}>
              <div className={menuHeadStyle}>{t("menu.main.head.events")}</div>
              <MenuItem
                to={
                  i18n.language === "KO"
                    ? "/notice/events/6752935a4764ab48ae24989b"
                    : "/notice/events/674d6523bfb7cc75578032aa"
                }
              >
                {t("menu.main.item.rcko")}
              </MenuItem>
              <MenuItem to={PATH.EVENTS_LATEST}>
                {t("menu.main.item.events_latest")}
              </MenuItem>
              <MenuItem to={PATH.EVENTS_ARCHIVE}>
                {t("menu.main.item.events_archive")}
              </MenuItem>
            </li>
            <li className={menuStyle}>
              <div className={menuHeadStyle}>{t("menu.main.head.notices")}</div>
              <MenuItem to={PATH.NOTICE_EVENTS}>
                {t("menu.main.item.notices_events")}
              </MenuItem>
              <MenuItem to={PATH.NOTICE_RULES}>
                {t("menu.main.item.notices_rules")}
              </MenuItem>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-end sm:flex-row justify-between pt-4 pb-16">
          <div className="flex flex-col max-lg:gap-2 lg:flex-row">
            <div>
              <a
                href="https://www.motie.go.kr/"
                className="hover:opacity-70 transition-opacity ease duration-200"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="/logos/Ministry_of_Trade_Industry_and_Energy.jpg"
                  className="h-10"
                  alt="institute1"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.nts.go.kr/"
                className="hover:opacity-70 transition-opacity ease duration-200"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="/logos/National_Tax_Service.jpg"
                  className="h-10"
                  alt="institute2"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.acrc.go.kr/"
                className="hover:opacity-70 transition-opacity ease duration-200"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="/logos/Anti-Corruption_and_Civil_rights_Commission.jpg"
                  className="h-10"
                  alt="institute3"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-end px-4 sm:text-right pt-4 sm:pt-0 text-sm font-light max-w-sm">
            <div className="text-start sm:text-right">
              <b>{language === "ko" ? "한국로보컵협회" : "RCKA"}</b>| Tel :
              070-4247-7485
            </div>
            <div className="text-start sm:text-right pb-2">
              {language === "ko"
                ? "주소: 서울시 서초구 서운로 13 중앙로얄 오피스텔 1308"
                : "Address: Room 1308, Jungang Royal Officetel, 13 Seoun-ro, Seocho-gu, Seoul, South Korea"}
            </div>
            <div className="text-start sm:text-right">
              Copyright ©{language === "ko" ? "한국로보컵협회" : "RCKA"}. All
              rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
