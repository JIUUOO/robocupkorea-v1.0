import { useState, useEffect } from "react";
import { Container, Title } from "../components/layouts";
import axios from "axios";

export default function NoticeEventsPage() {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const respond = await axios.get("http://localhost:8080/api/notice/meta");

      setNotice(respond);
    };

    getApi();
  }, []);

  return (
    <Container>
      <Title>이벤트 소식</Title>
      {notice.length
        ? notice.map((notice) => {
            return <div>{notice.title}</div>;
          })
        : undefined}
    </Container>
  );
}
