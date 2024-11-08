import { useTranslation } from "react-i18next";
import { Container, Title, Subtitle } from "../components/layouts";

export default function CommitteePage() {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const committeeData = [
    {
      no: 1,
      name: "SangYong Han",
      affiliation: "Kookmin Univ.",
      email: "syhan@kookmin.ac.kr",
      position: "Chair",
    },
    {
      no: 2,
      name: "ShinTaek Kim",
      affiliation: "Daelim Univ. Prof.",
      email: "stkim@daelim.ac.kr",
      position: "Co-chair",
    },
    {
      no: 3,
      name: "Han Ko",
      affiliation: "Midwest Univ. Prof., CEO USAKO Group",
      email: "ceo@usakogroup.com",
      position: "Co-chair",
    },
    {
      no: 4,
      name: "JahngHyon Park",
      affiliation: "Hanyang Univ. Prof.",
      email: "jpark@hanyang.ac.kr",
      position: "Member of Committee",
    },
    {
      no: 5,
      name: "JaeKweon Han",
      affiliation: "Hanyang Univ. Prof.",
      email: "jkhan@hanyang.ac.kr",
      position: "Member of Committee",
    },
    {
      no: 6,
      name: "BaekKyu Cho",
      affiliation: "Kookmin Univ.Prof.",
      email: "BaekKyuCho@kookmin.ac.kr",
      position: "Member of Committee",
    },
    {
      no: 7,
      name: "SunYoung Kim",
      affiliation: "Kookmin Univ. Prof.",
      email: "sykim@kookmin.ac.kr",
      position: "Member of Committee",
    },
    {
      no: 8,
      name: "Hak Lee",
      affiliation: "Kyungpook Nati' Univ. Prof.",
      email: "yihak@knu.ac.kr",
      position: "Member of Committee",
    },
    {
      no: 9,
      name: "SungHo Kim",
      affiliation: "Yeungnam Univ. Prof.",
      email: "sunghokim@ynu.ac.kr",
      position: "Member of Committee",
    },
    {
      no: 10,
      name: "SangBae Park",
      affiliation: "Korea Polytechnics. Prof.",
      email: "sb810park@kopo.ac.kr",
      position: "Member of Committee",
    },
    {
      no: 11,
      name: "JooHyung Lee",
      affiliation: "ADD. Senior Researcher",
      email: "addlh77@gmail.com",
      position: "Member of Committee",
    },
    {
      no: 12,
      name: "YoungHo Choi",
      affiliation: "Korea Institute of Robot & Convergence. PhD",
      email: "rockboy@kiro.re.kr",
      position: "Member of Committee",
    },
    {
      no: 13,
      name: "DongHee Han",
      affiliation: "RideFlux.",
      email: "dhhan@rideflux.com",
      position: "Member of Committee",
    },
  ];

  return (
    <Container>
      <Title>{t("menu.main.item.committee")}</Title>
      <Subtitle>
        {language === "ko"
          ? "한국로보컵협회 운영위원을 소개합니다"
          : "Meet the RCKA Committee Members"}
      </Subtitle>
      <div className="border rounded-lg overflow-x-scroll">
        <table className="w-full text-nowrap mt-2">
          <thead className="border-b">
            <tr>
              <th className="text-center p-1">#</th>
              <th className="text-start p-1">Name</th>
              <th className="text-start p-1">Affiliation</th>
              <th className="text-start p-1">E-Mail</th>
              <th className="text-start p-1">Position</th>
            </tr>
          </thead>
          <tbody>
            {committeeData.map(({ no, name, affiliation, email, position }) => (
              <tr className="h-11">
                <th className="text-center p-1">{no}</th>
                <td className="p-1">{name}</td>
                <td className="p-1">{affiliation}</td>
                <td className="p-1">{email}</td>
                <td className="p-1">{position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
