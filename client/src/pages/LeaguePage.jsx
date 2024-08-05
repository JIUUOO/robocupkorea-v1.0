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
      description:
        "외부의 조작 없이 로봇 스스로 공을 드리블하여 상대팀의 골대 안으로 넣는 로봇 축구 경기입니다. 한 팀당 2 대의 로봇을 출전시킬 수 있으며 자유롭게 로봇을 디자인하고 프로그래밍할 수 있습니다.",
    },
    {
      pathname: PATH.LEAGUES_JUNIOR_ONSTAGE,
      title: "OnStage",
      parent: "RoboCupJunior",
      description: "온스테이지!",
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
