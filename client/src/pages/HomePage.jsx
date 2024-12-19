import { useState } from "react";
import { Container } from "../components/layouts";
import chevronDown from "../assets/icons/chevron-down-solid.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const [showAccordion, setShowAcoordian] = useState("RCKA");

  const handleAcoordianClick = (name) =>
    name === showAccordion ? setShowAcoordian(null) : setShowAcoordian(name);

  const styleAccordionWrap =
    "inline-block mb-4 w-full ring ring-inset ring-1 ring-gray-300 rounded-lg shadow";
  const styleAccordionHead =
    "p-4 flex items-end justify-between cursor-pointer";
  const styleAccordionBody = (name) =>
    `overflow-hidden font-light  ${
      name === showAccordion
        ? "max-h-[40rem] w-full transition-[max-height] ease-in-out duration-1000"
        : "max-h-0"
    }`;
  const styleChevronIcon = (name) =>
    `h-4 mb-1 ${
      name === showAccordion
        ? "rotate-180 transition-transform duration-400"
        : ""
    }`;

  return (
    <>
      <Container>
        <div className="flex md:gap-3 max-md:flex-col p-4">
          <div className="max-w-lg w-full m-auto">
            <div className="mb-10">
              <iframe
                className="w-full aspect-video select-none pointer-events-none rounded rounded-2xl"
                src="https://www.youtube.com/embed/QB5dvHHnSMk?si=H8vYmersBfckFq5m&autoplay=1&mute=1&loop=1&controls=0&color=white&modestbranding=0&rel=0&playsinline=1&enablejsapi=18&playlist=QB5dvHHnSMk"
                title="RoboCup RCAP Pyeongchang 2023"
                allow="autoplay;"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div>
          <div className={styleAccordionWrap}>
            <div
              onClick={() => handleAcoordianClick("RCKA")}
              className={styleAccordionHead}
            >
              {language === "ko"
                ? "한국로보컵협회는 어떤 단체인가요?"
                : "What kind of organization is the RoboCup Korea Association?"}
              <img
                src={chevronDown}
                className={styleChevronIcon("RCKA")}
                alt="chevron-down-solid.svg"
              />
            </div>
            <div className={styleAccordionBody("RCKA")}>
              <div className="px-3 pb-3">
                {language === "ko"
                  ? "한국로보컵협회(RCKA) 홈페이지를 방문해주신 여러분께 깊이 감사드립니다. 사단법인 한국로보컵협회(이하 RCKA)는 로봇을 연구하는 학생들을 위해 국가적 및 국제적 로봇 이벤트인 로보컵(Robocup) 리그를 주최하는 프로젝트 중심의 교육 증진 운동입니다. RCKA는 참된 로봇교육에 뜻을 같이 하는 교육관련 종사자와 자원봉사자들로 구성된 비영리 기관입니다. RCKA는 도전, 협동 및 경쟁 촉면 등 교육에 필요한 여러가지를 모두 제공합니다. 여러분의 끊임없는 격려와 관심으로 성원해주시길 부탁드립니다."
                  : "Thank you sincerely for visiting the RoboCup Korea Association(RCKA) website. The RoboCup Korea Association(RCKA) is a project-centered educational promotion movement that hosts the RoboCup League, a national and international robotics event, for students researching robotics. RCKA is a non-profit organization comprised of educators and volunteers who share a commitment to true robotics education. RCKA provides essential elements for education, including challenges, collaboration, and the promotion of healthy competition. We ask for your continuous support and interest to encourage us on this journey."}
              </div>
            </div>
          </div>
        </div>
        <div className={styleAccordionWrap}>
          <div
            onClick={() => handleAcoordianClick("ROBOCUP")}
            className={styleAccordionHead}
          >
            {language === "ko"
              ? "로보컵 리그는 어떤 행사인가요?"
              : "What kind of event is the RoboCup League?"}
            <img
              src={chevronDown}
              className={styleChevronIcon("ROBOCUP")}
              alt="chevron-down-solid.svg"
            />
          </div>
          <div className={styleAccordionBody("ROBOCUP")}>
            <div className="px-3 pb-3">
              {language === "ko"
                ? "로보컵 리그의 설립목적은 양질의 다양한 로봇교육 제공에 있습니다. 청소년 학생들의 경우 로보컵 리그를 통하여 여러 로봇분야-전자, 하드웨어, 소프트웨어 등-에 대한 기술능력을 직접 키울 수 있는 기회를 제공합니다. 아울러 친구들과 함께 기술을 공유하면서 팀워크에 대해 배울 수 있는 동기부여를 받고 특별한 경험을 할 수 있는 새로운 방법을 제시합니다. 로보컵 리그는 다양한 참가자들이 우수한 로봇개발이라는 공동의 목표를 달성할 수 있는 팀으로 함께 연구할 수 있는 기회를 제공합니다."
                : "The purpose of the RoboCup League's establishment is to provide high-quality and diverse robotics education. For young students, the RoboCup League offers opportunities to directly develop technical skills in various robotics fields, such as electronics, hardware, and software. Additionally, it presents a new way for students to gain motivation and a unique experience, as they learn about teamwork and share knowledge with friends. The RoboCup League offers a platform where various participants can work together as teams toward the common goal of achieving excellence in robot development."}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
