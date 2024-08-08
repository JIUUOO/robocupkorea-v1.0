import { Link } from "react-router-dom";
import { PATH } from "../../routes/path";
import MenuItem from "./components/MenuItem";

export default function Footer() {
  const menuStyle = "pb-4";
  const menuHeadStyle = "pb-1 font-light";

  return (
    <footer className="mt-12">
      <div className="container">
        <div className="px-4">
          <div className="pb-8">
            <Link to={PATH.MAIN}>
              <img
                src="/logos/RCKA.png"
                className="inline h-12 md:h-14 mb-2"
                alt="RCKA.png"
              />
            </Link>
            <p className="max-w-xxs break-keep font-light">
              &nbsp;사단법인 한국로보컵협회(이하 RCKA)는 로봇을 연구하는
              학생들을 위해 국가적 및 국제적 로봇 이벤트를 주최하는 프로젝트
              중심의 교육 증진 운동입니다.
            </p>
          </div>
          <ul className="grid md:grid-cols-5">
            <li className={menuStyle}>
              <div className={menuHeadStyle}>한국로보켭협회</div>
              <MenuItem to={PATH.ABOUT}>소개</MenuItem>
              <MenuItem to={PATH.COMMITTEE}>운영위원</MenuItem>
            </li>
            <li className={menuStyle}>
              <div className={menuHeadStyle}>로보컵 리그</div>
              <MenuItem to={PATH.LEAGUES_JUNIOR}>RoboCupJunior</MenuItem>
              <MenuItem to={PATH.LEAGUES_SOCCER}>RoboCupSoccer</MenuItem>
              <MenuItem to={PATH.LEAGUES_RESCUE}>RoboCupRescue</MenuItem>
              <MenuItem to={PATH.LEAGUES_ATHOME}>RoboCup@Home</MenuItem>
              <MenuItem to={PATH.LEAGUES_INDUSTRIAL}>
                RoboCupIndustrial
              </MenuItem>
            </li>
            <li className={menuStyle}>
              <div className={menuHeadStyle}>로보컵 이벤트</div>
              <MenuItem to={PATH.EVENTS_LATEST}>
                제 5회 한국창의코딩대회
              </MenuItem>
              <MenuItem to={PATH.EVENTS_ARCHIVE}>이벤트 아카이브</MenuItem>
            </li>
            <li className={menuStyle}>
              <div className={menuHeadStyle}>공지사항</div>
              <MenuItem to={PATH.NOTICE_EVENTS}>이벤트 소식</MenuItem>
              <MenuItem to={PATH.NOTICE_RULES}>리그 규정</MenuItem>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-between py-4">
          <div className="flex flex-col lg:flex-row">
            <div>
              <a
                href="https://www.motie.go.kr/"
                className="institute"
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
                className="institute"
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
                className="institute"
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
          <div className="flex flex-col justify-end sm:text-right pt-4 sm:pt-0 pb-10 text-sm font-light">
            <div className="text-center sm:text-right">
              <b>한국로보컵협회</b> | Tel : 070-4247-7485
            </div>
            <div className="text-center sm:text-right pb-2">
              주소: 서울시 서초구 서운로 13 중앙로얄 오피스텔 1308
            </div>
            <div className="text-center sm:text-right">
              Copyright © 한국로보컵협회. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
