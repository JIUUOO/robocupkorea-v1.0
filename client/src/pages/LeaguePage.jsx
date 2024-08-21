import { useLocation } from "react-router-dom";
import { Container, Title, Subtitle } from "../components/layouts";
import { PATH } from "../routes/path";
import "../styles/LeaguePage.css";
import { useEffect, useState, useRef } from "react";

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

export default function LeaguePage() {
  const { pathname } = useLocation();

  const leagues = [
    {
      pathname: PATH.LEAGUES_JUNIOR_SOCCER,
      title: "Soccer",
      parent: "RoboCupJunior",
      img: "/images/RCJ_Soccer_2.jpg",
      descriptions: [
        {
          headline: `Soccer League
          (2:2 Lightweight and Open)`,
          text: `Soccer League는 매년 열리는 국제 로보컵 대회에서 두 개의 서브 리그가 있습니다. 축구 경량화(Light Weight)와 축구 오픈(Open)입니다.

          두 리그 모두 팀당 두 대의 로봇으로 진행되지만, 경량화 로봇은 카메라 없이 감지할 수 있는 적외선 볼을 사용하면서 무게 제한이 존재합니다.
          
          오렌지 골프공을 카메라로 감지해야하기 때문에 오픈 리그보다 더 정교한 소프트웨어를 요구합니다.`,
        },
        {
          headline: "Soccer Entry",
          text: `Soccer Entry(1:1 리그) 팀당 하나의 로봇으로 경쟁하는 하위 리그 입니다. 축구 엔트리는 Soccer 1:1 Standard Kit League와 Soccer 1:1 Lightweight로 구성됩니다.

          Soccer 1:1 Standard Kit League는 제한된 구성으로 처음 로봇컵에 참가하는 참가자들끼리 경쟁합니다.

          Soccer 1:1 Lightweight는 경량화된 로봇으로 경쟁합니다. 2:2 Lightweight, 2:2 Open 리그에 도전하기 전 참가하는 리그입니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_JUNIOR_ONSTAGE,
      title: "OnStage",
      parent: "RoboCupJunior",
      img: "/images/RCJ_OnStage.jpg",
      descriptions: [
        {
          headline: "RoboCupJunior OnStage",
          text: `OnStage의 팀들은 창의적이고 자율적으로 로봇들을 디자인하고, 제작하고, 프로그래밍합니다. 다양한 기술을 사용해 라이브 또는 스트리밍된 로봇 공연을 만들어 청중들에게 보여주는 것 입니다. 춤, 연극, 뮤지컬 등을 구상해 공연하는 것을 목표로 합니다.

                 OnStage는 개방적인 종목입니다. 팀들은 창의적으로 공연을 구상하고 혁신적으로 로봇을 구현해 청중들을 즐겁게 하도록 노력합니다. 모든 팀은 TDP(Technical Description Poster), 기술 시연(Technical Demonstration), 인터뷰(Technical Interview), 온스테이지 퍼포먼스(OnStage Performance) 등의 분야에서 심사를 받습니다. 모든 팀원은 7월 1일 기준 14세 이상 19세 이하여야 합니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_JUNIOR_RESCUE,
      title: "Rescue",
      parent: "RoboCupJunior",
      img: "/images/RCJ_Rescue.jpg",
      descriptions: [
        {
          headline: "RoboCupJunior Rescue",
          text: `Rescue는 탐색 및 구조 소프트웨어를 구현하는 종목입니다. 구조 시나리오를 제공받으면,
          요구조자를 탐색 및 구출하기 위한 소프트웨어를 개발해 구조자의 능력이 부여되는 지능형 에이전트 및 로봇을 구현합니다.
          주어진 환경에서 시뮬레이션을 하며 로봇의 하드웨어와 소프트웨어에 대한 객관적인 평가를 하며, 연구자 간의 협력을 목표로 합니다.
          로봇은 평평한 표면에서의 선 추적부터 고르지 않은 지형의 장애물을 통과해 안전지역에 이르기까지 복잡한 재난 시나리오에서 요구조자를 식별해 안전한 공간에 운반하는 것을 목표로 합니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_SOCCER_HUMANOID,
      title: "Humanoid",
      parent: "RoboCupSoccer",
      img: "",
      descriptions: [
        {
          headline: "Humanoid League",
          text: `Humanoid League에서는 인간과 유사한 구조와 인간과 유사한 센서를 가진 자율 로봇이 서로 축구를 합니다. 일반적인 휴머노이드 로봇과는 달리 범위 센서를 사용하여 보다 정교하게 경기장을 인식합니다. 일반적인 축구 규칙을 잘 따를 수 있는 "휴머노이드" 로봇을 구현하는 것이 큰 과제 입니다.
          
          휴머노이드 리그에서 연구된 많은 주요 구현 기능 중에는 균형유지, 걷고 뛰기, 공 인식, 공을 차기, 필드 인식하기, 자기 위치 파악, 상대 로봇과 우리 팀 로봇 인식, 팀 플레이가 있습니다. Humanoid League에서는 위 기능이 구현된 세계 최고의 자율 휴머노이드 로봇 팀들이 경쟁합니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_SOCCER_STANDARD_PLATFORM,
      title: "Standard Platform",
      parent: "RoboCupSoccer",
      descriptions: [
        {
          headline: "Standard Platform League",
          text: `Standard Platform League는 모든 팀이 동일한 로봇 플랫폼을 사용하여 참여하는 축구 리그입니다. 현재는 알데바란에서 제조한 NAO 휴머노이드 로봇이 표준 플랫폼으로 사용되고 있습니다. 이 리그는 완전 자율 로봇을 위한 알고리즘 개발에 중점을 두고 있습니다.

                 매년 열리는 Standard Platform League에서 팀 축구 경기와 기술적 문제해결능력으로 경쟁합니다. RoboCup 2023에서 팀 축구는 Champion Cup 종목에서 7 대 7, Challenge Shield 종목에서 5 대 5로 진행됐습니다. 문제해결 종목에서는 시각센서 처리를 통한 축구 심판, 움직이는 공의 핸들링 판단 및 적어도 하나의 게임 내 참가가 포함됐습니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_SOCCER_MIDDLE_SIZE,
      title: "Middle Size",
      parent: "RoboCupSoccer",
      description: "와 축구! 제가 잘 알죠",
    },
    {
      pathname: PATH.LEAGUES_SOCCER_SMALL_SIZE,
      title: "Small Size",
      parent: "RoboCupSoccer",
      description: "와 축구! 제가 잘 알죠",
    },
    {
      pathname: PATH.LEAGUES_SOCCER_SIMULATION,
      title: "Simulation",
      parent: "RoboCupSoccer",
      description: "와 축구! 제가 잘 알죠",
    },
    {
      pathname: PATH.LEAGUES_RESCUE_ROBOT,
      title: "Robot",
      parent: "RoboCupRescue",
      description: "레스큐가 가장 쉬웠어요",
    },
    {
      pathname: PATH.LEAGUES_RESCUE_SIMULATION,
      title: "Simulation",
      parent: "RoboCupRescue",
      description: "레스큐가 가장 쉬웠어요",
    },
    {
      pathname: PATH.LEAGUES_ATHOME_OPEN_PLATFORM,
      title: "Open Platform",
      parent: "RoboCup@Home",
      description: "애 돔",
    },
    {
      pathname: PATH.LEAGUES_ATHOME_DOMESTIC_STANDARD_PLATFORM,
      title: "Domestic Standard Platform",
      parent: "RoboCup@Home",
      description: "애 돔",
    },
    {
      pathname: PATH.LEAGUES_ATHOME_SOCIAL_STANDARD_PLATFORM,
      title: "Social Standard Platform",
      parent: "RoboCup@Home",
      description: "애 돔",
    },
  ];
  const Description = ({ headline, text }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.5,
    });

    return (
      <div ref={ref} className="overflow-hidden mt-5 mb-5 ml-8 mr-10">
        <div className={` ${isIntersecting ? "slide-in-bottom" : "opacity-0"}`}>
          <div className="text-lg font-bold whitespace-pre-line">
            {headline}
          </div>
          <div className="whitespace-pre-line">{text}</div>
        </div>
      </div>
    );
  };

  const Notice = ({ title }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.5,
    });

    return (
      <div
        ref={ref}
        className={`inline-block border border-black border-1 rounded-lg p-1.5 ${
          isIntersecting ? "slide-top" : "opacity-0"
        }`}
      >
        <a href={PATH.NOTICE_EVENTS}>{title} 규정 알아보기</a>
      </div>
    );
  };

  return (
    <Container>
      {leagues.map((league) => {
        if (league.pathname === pathname)
          return (
            <>
              <div
                className="bg-fixed bg-cover md:bg-contain bg-center bg-no-repeat content-end bg"
                style={{
                  backgroundImage: `url(${league.img})`,
                  height: "90vh",
                }}
              >
                <div className="text-white fade-in w-full text-center stroke">
                  <Title>{league.title}</Title>
                  <Subtitle>{league.parent}</Subtitle>
                </div>
              </div>

              <div className="flex flex-row border-b">
                {league.descriptions.map((description) => (
                  <Description
                    headline={description.headline}
                    text={description.text}
                  />
                ))}
              </div>
              <div className="mt-5">
                <Notice title={league.title} />
              </div>
            </>
          );
      })}
    </Container>
  );
}
