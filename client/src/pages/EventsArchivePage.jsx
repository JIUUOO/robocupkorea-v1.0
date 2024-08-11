import { Container, Title, Subtitle } from "../components/layouts";

export default function EventsArchivePage() {
  const banners = [
    "/banners/2023_CCC.jpg",
    "/banners/2023_RCAP_KR.png",
    "/banners/2024_RCOPEN.png",
  ];

  return (
    <Container>
      <Title>이벤트 아카이브</Title>
      <Subtitle>역대 개최된 이벤트입니다</Subtitle>
      <div className="grid md:grid-cols-2 flex justify-center items-center">
        {banners.map((src) => (
          <img src={src} className="pb-2" alt="not found" />
        ))}
      </div>
    </Container>
  );
}
