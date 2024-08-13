import { Container, Title, Subtitle } from "../components/layouts";

export default function NotFoundPage() {
  return (
    <Container className="text-center mb-40">
      <Title>Not Found</Title>
      <Subtitle>잘못된 경로의 페이지입니다.</Subtitle>
    </Container>
  );
}
