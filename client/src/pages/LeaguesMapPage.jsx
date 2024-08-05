import { useLocation } from "react-router-dom";
import { Container, Title, Subtitle } from "../components/layouts";
import { PATH } from "../routes/path";

export default function LeaguesMapPage() {
  const { pathname } = useLocation();

  const leagues = [
    {
      pathname: PATH.LEAGUES_JUNIOR,
      title: "RoboCupJunior",
      description: "주니어!",
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
      description: "주니어!",
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
      description: "주니어!",
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
      description: "주니어!",
      child: [
        {
          href: PATH.LEAGUES_ATHOME_OPENPLATFORM,
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
      description: "주니어!",
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

  const league = leagues.map((league) => {
    if (league.pathname === pathname) {
      return (
        <>
          <Title>{league.title}</Title>
          <Subtitle>로보컵 리그</Subtitle>
          <div className="mb-10">{league.description}</div>
          <div>
            {league.child.map((childLeague) => {
              return (
                <div className="underline">
                  <a href={childLeague.href}>{childLeague.title}</a>
                </div>
              );
            })}
          </div>
        </>
      );
    }
  });

  return <Container>{league}</Container>;
}
