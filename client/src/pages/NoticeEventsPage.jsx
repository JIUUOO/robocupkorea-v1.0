import { useEffect } from "react";
import { Container, Title } from "../components/layouts";
import axios from "axios";

export default function NoticeEventsPage() {
  const [notice, setNotice] = useEffect([]);

  useEffect(() => {
    const getApi = async () => {
      const respond = axios.get("localhost:8080/api/notice/meta");

      setNotice(repond);
    };

    getApi();
  }, []);

  return (
    <Container>
      <Title>이벤트 소식</Title>
      {notice.map(() => {
        return <div>{notice.title}</div>;
      })}
    </Container>
  );
}
