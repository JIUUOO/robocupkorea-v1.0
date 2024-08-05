import { useLocation } from "react-router-dom";
import { Container, Title, Subtitle } from "../../components/layouts";
import { PATH } from "../../routes/path";

export default function RoboCupLeaguesPage() {
  const { pathname } = useLocation();

  const leagues = [
    {
      pathname: "/leagues/junior",
      title: "RoboCupJunior",
      description: "주니어!",
      child: [
        {
          href: PATH.ABOUT,
          title: "Soccer",
        },
        {
          href: PATH.COMMITTEE,
          title: "OnStage",
        },
      ],
    },
    {
      pathname: "/leagues/soccer",
      title: "RoboCupSoccer",
      description: "주니어!",
    },
    {
      pathname: "/leagues/rescue",
      title: "RoboCupRescue",
      description: "주니어!",
    },
    {
      pathname: "/leagues/athome",
      title: "RoboCup@Home",
      description: "주니어!",
    },
    {
      pathname: "/leagues/industrial",
      title: "RoboCupIndustrial",
      description: "주니어!",
    },
  ];

  return (
    <Container>
      {leagues.map((league) => {
        if (league.pathname === pathname) {
          return (
            <>
              <Title>{league.title}</Title>
              <Subtitle>로보컵 리그</Subtitle>
              <div>{league.description}</div>
              <div>
                {league.child.map((subleague) => {
                  return (
                    <div className="">
                      <a href={subleague.href}>{subleague.title}</a>
                    </div>
                  );
                })}
              </div>
            </>
          );
        }
      })}
    </Container>
  );
}
