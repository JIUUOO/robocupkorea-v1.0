import { useLocation } from "react-router-dom";
import { Container, Title, Subtitle } from "../components/layouts";
import { PATH } from "../routes/path";
import "../styles/LeaguesMapPage.css";
import { useEffect, useState, useRef } from "react";

export default function LeaguesMapPage() {
  const { pathname } = useLocation();

  const leagues = [
    {
      pathname: PATH.LEAGUES_JUNIOR,
      title: "RoboCupJunior",
      img: "/images/RCJ_Soccer_1.jpg",
      descriptions: [
        {
          text: `로보컵주니어(RoboCupJunior)는 19세까지의 학생들을 대상으로 프로젝트 지향적인 종목을 경쟁하는 부문입니다.
          시니어 리그에 참여할 자원이 없는 학부생뿐만 아니라 초, 중등 어린이들까지 로보컵(RoboCup)을 경험할 수 있습니다.
          주니어 리그의 초점은 교육에 있습니다. 참가자들에게 국제 교류 프로그램에 참여하고 해외에서 온 다른 참가자들을 만나는 경험을 공유할 수 있는 기회를 제공합니다.`,
        },
        {
          text: "로보컵주니어(RoboCupJunior)는 각각 협력적인 측면과 경쟁적인 측면을 강조하는 여러 도전 과제를 제공합니다. 어린 학생들을 위해 로봇 분야에 대한 흥미로운 소개, 전자, 하드웨어 및 소프트웨어와의 실제 경험을 통해 기술적 능력을 개발하는 새로운 방법, 그리고 다른 참가자들과 기술을 공유하면서 팀워크에 대해 배울 수 있는 매우 동기 부여적인 기회를 제공합니다. 참가자 혼자서 문제를 해결하는 것이 아닌, 다양한 관심사와 강점을 가진 참가자들이 공동의 목표를 달성하기 위해 팀으로 함께 일할 수 있는 독특한 기회를 제공합니다.",
        },
      ],

      child: [
        {
          href: PATH.LEAGUES_JUNIOR_SOCCER,
          title: "Soccer",
        },
        {
          href: PATH.LEAGUES_JUNIOR_ONSTAGE,
          title: "OnStage",
        },
        {
          href: PATH.LEAGUES_JUNIOR_RESCUE,
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
          text: "로보컵 대회의 주요 초점은 RoboCup Soccer입니다. 참가자들의 목표는 역동적인 적대적 환경에서 서로 협력하는 다중 로봇 및 다중 에이전트 시스템에 구현해 경기에서 승리하는 것 입니다.",
        },
        {
          text: "이 리그의 모든 로봇은 완전히 자율적입니다. 경기들은 S&T(Science & Technology) 이슈를 중심으로 참가자들이 자발적으로 연구할 수 있는 좋은 기회를 제공합니다.",
        },
      ],
      child: [
        {
          href: PATH.LEAGUES_SOCCER_HUMANOID,
          title: "Humanoid",
        },
        {
          href: PATH.LEAGUES_SOCCER_STANDARD_PLATFORM,
          title: "Standard Platform",
        },
        {
          href: PATH.LEAGUES_SOCCER_MIDDLE_SIZE,
          title: "Middle Size",
        },
        {
          href: PATH.LEAGUES_SOCCER_SMALL_SIZE,
          title: "Small Size",
        },
        {
          href: PATH.LEAGUES_SOCCER_SIMULATION,
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
          text: "RoboCup Rescue는 문제 판단 인식과, 종합적인 개발능력을 키우고 경쟁하는 부문입니다. 경기장을 확인해 탐색 및 구조 애플리케이션을 설계할 수 있는 인지능력을 키웁니다.",
        },
        {
          text: `효율적으로 탐색 및 구조 시나리오를 실행하기 위한 시뮬레이터를 개발해야합니다.
          검색 및 구조 시나리오에서 주요 로봇의 능력이되는 지능형 에이전트 및 소프트웨어를 개발하고, 주어진 경기장에서 로봇 및 소프트웨어 구현에 대한 객관적인 평가를 제공하며, 연구자 간의 협력을 촉진하는 것을 목표로 합니다.`,
        },
      ],
      child: [
        {
          href: PATH.LEAGUES_RESCUE_ROBOT,
          title: "Robot",
        },
        {
          href: PATH.LEAGUES_RESCUE_SIMULATION,
          title: "Simulation",
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_ATHOME,
      title: "RoboCup@Home",
      descriptions: [
        {
          text: "RoboCup@Home 리그는 미래의 개인 국내 애플리케이션과 관련성이 높은 서비스 및 보조 로봇 기술을 개발하는 것을 목표로 합니다. 이 대회는 자율 서비스 로봇을 위한 가장 큰 국제 연례 대회이며 RoboCup initiative의 일부입니다. 일련의 벤치마크 테스트는 현실적인 비표준화된 가정 환경 환경에서 로봇의 능력과 성능을 평가하는 데 사용됩니다.",
        },
        {
          text: "인간-로봇-상호 작용 및 협력, 동적 환경에서의 내비게이션 및 매핑, 자연광 조건에서의 컴퓨터 비전 및 물체 인식, 물체 조작, 적응 행동, 행동 통합, 주변 지능, 표준화 및 시스템 통합을 초점에 두고있습니다.",
        },
      ],
      child: [
        {
          href: PATH.LEAGUES_ATHOME_OPEN_PLATFORM,
          title: "Open Platform",
        },
        {
          href: PATH.LEAGUES_ATHOME_DOMESTIC_STANDARD_PLATFORM,
          title: "Domestic Standard Platform",
        },
        {
          href: PATH.LEAGUES_ATHOME_SOCIAL_STANDARD_PLATFORM,
          title: "Social Standard Platform",
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_INDUSTRIAL,
      title: "RoboCupIndustrial",
      descriptions: [{ text: "There's no scripts" }],
      child: [
        {
          href: PATH.LEAGUES_INDUSTRIAL_ROBOCUP_ATWORK,
          title: "RoboCup@Work",
        },
        {
          href: PATH.LEAGUES_INDUSTRIAL_LOGISTICS,
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
          isIntersecting ? "slide-in-left" : "opacity-0"
        } whitespace-pre-line`}
      >
        {text}
      </div>
    );
  };

  const ChildLink = ({ href, title }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.5,
    });

    return (
      <div
        ref={ref}
        className={`inline-block ${
          isIntersecting ? "slide-top" : "opacity-0"
        } underline underline-offset-2`}
      >
        <a href={href}>{title}</a>
      </div>
    );
  };

  const league = leagues.map((league) => {
    if (league.pathname === pathname) {
      return (
        <>
          <div className="text-center fade-in">
            <Title>{league.title}</Title>
            <Subtitle>로보컵 리그</Subtitle>
          </div>

          <div className="mb-5 border-b">
            <div className="flex flex-col lg:flex-row">
              <div className="fade-in w-full lg:w-3/5 mb-10">
                <img
                  className="w-full"
                  src={`${league.img}`}
                  alt="Not Founded"
                />
              </div>

              <div className="w-full lg:w-2/5 lg:ml-5 overflow-hidden">
                {league.descriptions.map((description, index) => (
                  <Description
                    key={index}
                    text={description.text}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-flow-col auto-rows-max text-center">
            {league.child.map((childLeague, index) => (
              <ChildLink
                key={index}
                href={childLeague.href}
                title={childLeague.title}
                index={index}
              />
            ))}
          </div>
        </>
      );
    }
  });

  return <Container>{league}</Container>;
}
