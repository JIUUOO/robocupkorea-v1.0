import { useLocation } from "react-router-dom";
import { Container, Title, Subtitle } from "../components/layouts";
import { PATH } from "../routes/path";

export default function LeaguePage() {
  const { pathname } = useLocation();

  const leagues = [
    {
      pathname: PATH.LEAGUES_JUNIOR_SOCCER,
      title: "Soccer",
      parent: "RoboCupJunior",
      description:"Soccer League(2:2 Lightweight and Open) 축구는 매년 열리는 국제 로보컵 대회에서 두 개의 서브 리그가 있습니다. 축구 경량화(Light Weight)와 축구 오픈(Open)입니다. 두 리그 모두 팀당 두 대의 로봇으로 진행되지만 경량화 로봇은 카메라 없이 감지할 수 있는 적외선 볼을 사용하면서 무게 제한이 존재합니다. 오렌지 골프공을 카메라로 감지해야하기 때문에 오픈 리그보다 더 정교한 소프트웨어를 요구합니다. Soccer Entry(1:1 리그) 팀당 하나의 로봇으로 경쟁하는 하위 리그 입니다. 축구 엔트리는 Soccer 1:1 Standard Kit League(제한된 구성, 첫 참가자들의 축구리그)와 Soccer 1:1 Lightweight(2:2 Lightweight, 그리고 2:2 Open까지 가는 단계)로 구성됩니다."
    },
    {
      pathname: PATH.LEAGUES_JUNIOR_ONSTAGE,
      title: "OnStage",
      parent: "RoboCupJunior",
      description: "로보컵 주니어 온스테이지는 팀들이 창의적이고 자율적인 물리적인 로봇들을 디자인하고, 제작하고, 프로그래밍하도록 초대합니다. 목표는 청중들을 참여시키기 위해 다양한 기술을 사용하는 라이브 또는 스트리밍된 로봇 공연을 만드는 것입니다. 이것은 춤, 스토리텔링, 극장 또는 예술 설치와 같은 가능한 공연의 범위를 포함합니다. 그 공연은 음악을 포함할 수 있지만, 이것은 선택 사항입니다. 그 리그는 개방형으로 의도되어 있습니다. 로봇의 디자인과 전체 공연의 디자인 모두에서, 팀들은 창의적이고, 혁신적이며, 즐거움을 주도록 격려됩니다. 모든 팀원은 14세 이상 19세 이하(7월 1일 기준)여야 합니다. 모든 팀은 TDP(Technical Description Poster), TDP(Technical Description Poster), 기술 시연(Technical Demonstration), 인터뷰(Technical Interview), 온스테이지 퍼포먼스(OnStage Performance) 등의 분야에서 심사를 받습니다."
    },
    {
      pathname: PATH.LEAGUES_JUNIOR_RESCUE,
      title: "Rescue",
      parent: "RoboCupJunior",
      description: "레스큐!",
    },
    {
      pathname: PATH.LEAGUES_SOCCER_HUMANOID,
      title: "Humanoid",
      parent: "RoboCupSoccer",
      description: "와 축구! 제가 잘 알죠",
    },
  ];

  return (
    <Container>
      {leagues.map((league) => {
        if (league.pathname === pathname)
          return (
            <>
              <Title>{league.title}</Title>
              <Subtitle>{league.parent}</Subtitle>
              <div className="max-w-md keep-all mb-10">
                &nbsp;{league.description}
              </div>
              <div className="inline-block border border-black border-1 rounded-lg p-1.5">
                <a href={PATH.NOTICE_EVENTS}>{league.title} 규정 알아보기</a>
              </div>
            </>
          );
      })}
    </Container>
  );
}
