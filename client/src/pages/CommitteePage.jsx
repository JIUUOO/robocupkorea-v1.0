import { Container, Title, Subtitle } from "../components/layouts";

export default function CommitteePage() {
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
      <Title>운영위원</Title>
      <Subtitle>한국로보컵협회 운영위원을 소개합니다</Subtitle>
      <div className="overflow-x-scroll">
        <table className="text-nowrap">
          <thead>
            <tr className="h-10 border rounded-lg">
              <th className="text-center border-r px-2">#</th>
              <th className="text-start px-4">Name</th>
              <th className="text-start px-4">Affiliation</th>
              <th className="text-start px-4">E-Mail</th>
              <th className="text-start px-4">Position</th>
            </tr>
          </thead>
          <tbody>
            {committeeData.map(({ no, name, affiliation, email, position }) => (
              <tr className="h-10 border rounded-lg border-separate	">
                <th className="text-center border-r px-2">{no}</th>
                <td className="px-4">{name}</td>
                <td className="px-4">{affiliation}</td>
                <td className="px-4">{email}</td>
                <td className="px-4">{position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
