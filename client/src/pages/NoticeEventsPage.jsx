import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Title, Subtitle } from "../components/layouts";
import { PATH } from "../routes/path";

export default function NoticeEventsPage() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const { data } = await axios.get(`${apiBaseUrl}/meta`);
        setNotice(data);
      } catch (error) {
        console.log(error);
      }
    };

    getApi();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Title>이벤트 소식</Title>
      <Subtitle>이벤트 소식을 공지합니다</Subtitle>
      <div className="overflow-x-scroll">
        <table className="text-nowrap">
          <thead>
            <tr className="border-y border-black h-9">
              <th className="py-1 px-2 text-start">제목</th>
              <th className="py-1 px-2 text-start">작성자</th>
              <th className="py-1 px-2 text-start">날짜</th>
            </tr>
          </thead>
          <tbody>
            {notice.length
              ? notice.map((notice) => {
                  return (
                    <tr key={notice._id} className="">
                      <td className="p-2">
                        <a href={`${PATH.NOTICE_EVENTS}/${notice._id}`}>
                          {notice.title}
                        </a>
                      </td>
                      <td className="p-2 font-semibold">{notice.author}</td>
                      <td className="p-2">{notice.date.split("T")[0]}</td>
                    </tr>
                  );
                })
              : undefined}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
