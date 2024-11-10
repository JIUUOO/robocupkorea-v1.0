import { Link, useLocation } from "react-router-dom";
import { Container, Title, Subtitle } from "../components/layouts";
import { PATH } from "../routes/path";
import "../styles/LeaguePage.css";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function LeaguesMapPage() {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const { pathname } = useLocation();

  const leagues = [
    {
      pathname: PATH.LEAGUES_JUNIOR,
      title: "RoboCupJunior",
      img: "/images/RCJ_Soccer_1.jpg",
      descriptions: [
        {
          text:
            language === "ko"
              ? `로보컵주니어(RoboCupJunior)는 19세까지의 학생들을 대상으로 프로젝트 지향적인 종목을 경쟁하는 종목입니다.
                시니어 리그에 참여할 자원이 없는 학부생뿐만 아니라 초, 중등 어린이들까지 로보컵(RoboCup)을 경험할 수 있습니다.
                주니어 리그의 초점은 교육에 있습니다.
                참가자들에게 국제 교류 프로그램에 참여하고 해외에서 온 다른 참가자들을 만나는 경험을 공유할 수 있는 기회를 제공합니다.`
              : `RoboCupJunior is a competition for students up to the age of 19, focusing on project-oriented events. It allows not only undergraduate students who may not have the resources to participate in the senior leagues but also children from elementary and middle schools to experience RoboCup. The emphasis of the Junior League is on education. It provides participants with opportunities to engage in international exchange programs and share experiences by meeting other participants from around the world.
          `,
        },
        {
          text:
            language === "ko"
              ? "로보컵주니어(RoboCupJunior)는 각각 협력적인 측면과 경쟁적인 측면을 강조하는 여러 도전 과제를 제공합니다. 어린 학생들을 위해 로봇 분야에 대한 흥미로운 소개, 전자, 하드웨어 및 소프트웨어와의 실제 경험을 통해 기술적 능력을 개발하는 새로운 방법, 그리고 다른 참가자들과 기술을 공유하면서 팀워크에 대해 배울 수 있는 기회를 제공합니다. 참가자 혼자서 문제를 해결하는 것이 아닌, 다양한 관심사와 강점을 가진 참가자들이 공동의 목표를 달성하기 위해 팀으로 함께 일할 수 있는 독특한 기회를 제공합니다."
              : "RoboCupJunior offers various challenges that emphasize both collaborative and competitive aspects. It provides young students with an engaging introduction to the field of robotics, offering hands-on experience with electronics, hardware, and software to develop technical skills in new ways. Participants also have the opportunity to learn teamwork by sharing their knowledge and collaborating with others. Rather than solving problems alone, RoboCupJunior gives participants the unique chance to work in teams, where individuals with different interests and strengths come together to achieve common goals.",
        },
      ],

      child: [
        {
          href: PATH.LEAGUES_JUNIOR_SOCCER,
          img: "/images/child/rcjSoccer.png",
          title: "Soccer",
        },
        {
          href: PATH.LEAGUES_JUNIOR_ONSTAGE,
          img: "/images/child/rcjOnstage.png",
          title: "OnStage",
        },
        {
          href: PATH.LEAGUES_JUNIOR_RESCUE,
          img: "/images/child/rcjRescue.png",
          title: "Rescue",
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_SOCCER,
      title: "RoboCupSoccer",
      img: "/images/RC_Soccer.gif",
      descriptions: [
        {
          text:
            language === "ko"
              ? "로보컵 대회의 주요 초점은 RoboCup Soccer입니다. 참가자들의 목표는 역동적인 적대적 환경에서 서로 협력하는 다중 로봇 및 다중 에이전트 시스템에 구현해 경기에서 승리하는 것 입니다."
              : "The main focus of the RoboCup competition is RoboCup Soccer. The participants’ goal is to implement multi-robot and multi-agent systems that cooperate with each other in dynamic, competitive environments in order to win the game.",
        },
        {
          text:
            language === "ko"
              ? "이 리그의 모든 로봇은 완전히 자율적입니다. 경기들은 S&T(Science & Technology) 이슈를 중심으로 참가자들이 자발적으로 연구할 수 있는 좋은 기회를 제공합니다."
              : "All robots in this league are fully autonomous. The matches provide a great opportunity for participants to conduct self-driven research, focusing on Science & Technology (S&T) issues. These competitions encourage innovation and exploration in robotics and related fields.",
        },
      ],
      child: [
        {
          href: PATH.LEAGUES_SOCCER_HUMANOID,
          img: "/images/child/rcsHumanoid.png",
          title: "Humanoid",
        },
        {
          href: PATH.LEAGUES_SOCCER_STANDARD_PLATFORM,
          img: "/images/child/rcsStandard.png",
          title: "Standard Platform",
        },
        {
          href: PATH.LEAGUES_SOCCER_MIDDLE_SIZE,
          img: "/images/child/rcsMiddle.png",
          title: "Middle Size",
        },
        {
          href: PATH.LEAGUES_SOCCER_SMALL_SIZE,
          img: "/images/child/rcsSmall.png",
          title: "Small Size",
        },
        {
          href: PATH.LEAGUES_SOCCER_SIMULATION,
          img: "/images/child/rcsSimulation.png",
          title: "Simulation",
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_RESCUE,
      title: "RoboCupRescue",
      img: "/images/RCJ_Rescue.jpg",
      descriptions: [
        {
          text:
            language === "ko"
              ? "RoboCup Rescue는 문제 판단 인식과, 종합적인 개발능력을 키우고 경쟁하는 종목입니다. 경기장을 확인해 탐색 및 구조 애플리케이션을 설계할 수 있는 인지능력을 키웁니다."
              : "RoboCup Rescue is a competition focused on problem recognition, decision-making, and the development of comprehensive skills. It aims to enhance participants’ cognitive abilities by enabling them to design search and rescue applications based on the assessment of the competition environment. The league encourages the development of robots that can effectively navigate and perform tasks in disaster scenarios.",
        },
        {
          text:
            language === "ko"
              ? `효율적으로 탐색 및 구조 시나리오를 실행하기 위한 시뮬레이터를 개발해야합니다.
              검색 및 구조 시나리오에서 주요 로봇의 능력이되는 지능형 에이전트 및 소프트웨어를 개발하고, 주어진 경기장에서 로봇 및 소프트웨어 구현에 대한 객관적인 평가를 제공하며, 연구자 간의 협력을 촉진하는 것을 목표로 합니다.`
              : `The goal is to develop a simulator for efficiently executing search and rescue scenarios. 
              This involves developing intelligent agents and software that are key capabilities in search and rescue scenarios, and providing an objective evaluation of robot and software implementations in a given competition environment. Additionally, the league aims to foster collaboration among researchers, encouraging the development of effective and innovative solutions for these critical applications.`,
        },
      ],
      child: [
        {
          href: PATH.LEAGUES_RESCUE_ROBOT,
          img: "/images/child/rcrRobot.png",
          title: "Robot",
        },
        {
          href: PATH.LEAGUES_RESCUE_SIMULATION,
          img: "/images/child/rcrSimulation.png",
          title: "Simulation",
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_ATHOME,
      title: "RoboCup@Home",
      img: "/images/RC@Home.png",
      descriptions: [
        {
          text:
            language === "ko"
              ? "RoboCup@Home 리그는 미래의 개인 국내 애플리케이션과 관련성이 높은 서비스 및 보조 로봇 기술을 개발하는 것을 목표로 합니다. 이 대회는 자율 서비스 로봇을 위한 가장 큰 국제 연례 대회이며 RoboCup initiative의 일부입니다. 일련의 벤치마크 테스트는 현실적인 비표준화된 가정 환경 환경에서 로봇의 능력과 성능을 평가하는 데 사용됩니다."
              : "The RoboCup@Home league aims to develop service and assistive robot technologies that are highly relevant to future personal domestic applications. It is the largest international annual competition for autonomous service robots and is part of the RoboCup initiative. A series of benchmark tests are used to evaluate the capabilities and performance of robots in realistic, non-standardized home environments. This league focuses on advancing robots’ abilities to assist with everyday tasks in home settings.",
        },
        {
          text:
            language === "ko"
              ? "인간-로봇-상호 작용 및 협력, 동적 환경에서의 내비게이션 및 매핑, 자연광 조건에서의 컴퓨터 비전 및 물체 인식, 물체 조작, 적응 행동, 행동 통합, 주변 지능, 표준화 및 시스템 통합을 초점에 두고있습니다."
              : "The RoboCup@Home league focuses on key areas such as human-robot interaction and cooperation, navigation and mapping in dynamic environments, computer vision and object recognition under natural lighting conditions, object manipulation, adaptive behavior, behavior integration, ambient intelligence, standardization, and system integration. These focus areas aim to enhance the development of robots that can seamlessly assist humans in everyday domestic tasks within complex, real-world environments.",
        },
      ],
      child: [
        {
          href: PATH.LEAGUES_ATHOME_OPEN_PLATFORM,
          img: "/images/child/rchOpen.png",
          title: "Open Platform",
        },
        {
          href: PATH.LEAGUES_ATHOME_DOMESTIC_STANDARD_PLATFORM,
          img: "/images/child/rchDomestic.png",
          title: "Domestic Standard Platform",
        },
        {
          href: PATH.LEAGUES_ATHOME_SOCIAL_STANDARD_PLATFORM,
          img: "/images/child/rchSocial.png",
          title: "Social Standard Platform",
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_INDUSTRIAL,
      title: "RoboCupIndustrial",
      img: "/images/RC_Industrial.jpg",
      descriptions: [{ text: "" }],
      child: [
        {
          href: PATH.LEAGUES_INDUSTRIAL_ROBOCUP_ATWORK,
          img: "/images/child/rciWork.png",
          title: "RoboCup@Work",
        },
        {
          href: PATH.LEAGUES_INDUSTRIAL_LOGISTICS,
          img: "/images/child/rciLogistics.png",
          title: "Logistics",
        },
      ],
    },
  ];

  const useIntersectionObserver = (options) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      }, options);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [options]);

    return [ref, isIntersecting];
  };

  const Description = ({ text }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.5,
    });

    return (
      <div
        ref={ref}
        className={`mb-10 ${
          isIntersecting ? "slide-in-bottom" : "opacity-0"
        } text-lg whitespace-pre-line`}
      >
        {text}
      </div>
    );
  };

  const ChildLink = ({ href, title, img }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.5,
    });

    return (
      <div className="mx-3 w-full">
        <Link to={href} className="inline-block w-full h-full">
          <div
            ref={ref}
            className={`inline-block ${
              isIntersecting ? "slide-in-bottom" : "opacity-0"
            } underline underline-offset-2 rounded-lg bg-cover bg-center place-content-center stroke text-white w-full h-full`}
            style={{
              backgroundImage: `url(${img})`,
              height: "30vh",
            }}
          >
            {title}
          </div>
        </Link>
      </div>
    );
  };

  const league = leagues.map((league) => {
    if (league.pathname === pathname) {
      return (
        <>
          <div
            className="bg-fixed bg-contain bg-center bg-no-repeat content-end"
            style={{
              backgroundImage: `url(${league.img})`,
              widows: "100vw",
              height: `${league.img !== undefined ? "90vh" : "20vh"}`,
            }}
          >
            <div className="text-white fade-in w-full text-center stroke">
              <Title>{league.title}</Title>
              <Subtitle>{t("menu.main.head.leagues")}</Subtitle>
            </div>
          </div>

          <div className="my-5">
            <div className="overflow-hidden">
              {league.descriptions.map((description, index) => (
                <Description
                  key={index}
                  text={description.text}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div
            className={`flex flex-rows auto-rows-max text-center overflow-hidden`}
          >
            {league.child.map((childLeague, index) => (
              <ChildLink
                key={index}
                href={childLeague.href}
                title={childLeague.title}
                index={index}
                img={childLeague.img}
              />
            ))}
          </div>
        </>
      );
    }
    return undefined;
  });

  return <Container>{league}</Container>;
}
