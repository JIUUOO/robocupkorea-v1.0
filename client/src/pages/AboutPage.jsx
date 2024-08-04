import { Container, Title, Subtitle } from "../components/layouts";
import robotNewsLogo from "../assets/logos/Robot_News.png";

export default function About() {
  return (
    <Container>
      <Title>소개</Title>
      <Subtitle>한국로보컵협회를 소개합니다</Subtitle>
      <div className="pb-5">
        <iframe
          className="w-full aspect-video"
          style={{ maxWidth: "768px" }}
          src="https://www.youtube.com/embed/OoY9wlojwzQ"
          title="국제 로봇월드컵 개막…“2050년 사람과도 경기할 것” / KBS  2023.12.08."
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpplicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex items-center">
        <div>
          <img src={robotNewsLogo} className="w-32 mr-3" alt="Robot_News.png" />
        </div>
        <div>
          <a
            href="https://www.irobotnews.com/news/articleView.html?idxno=34077"
            className="underline"
            rel="noreferrer"
            target="_blank"
          >
            2024 코리아 로보컵 오픈대회 18일 성료
          </a>
        </div>
      </div>
    </Container>
  );
}
