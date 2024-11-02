import { useState, useLayoutEffect } from "react";
import axios from "axios";
import { Container, Title, Subtitle } from "../components/layouts";
import { PATH } from "../routes/path";
import { useLocation } from "react-router-dom";

export default function NoticePage() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [noticeData, setNoticeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  const notices = [
    {
      pathname: PATH.NOTICE_EVENTS,
      title: "이벤트 소식",
      subtitle: "이벤트 소식을 공지합니다",
      category: "announcement",
    },
    {
      pathname: PATH.NOTICE_RULES,
      title: "리그 규정",
      subtitle: "리그 규정을 공지합니다",
      category: "reference",
    },
  ];

  useLayoutEffect(() => {
    setNoticeData([]);
    setLoading(true);

    const getApi = async () => {
      try {
        const { data } = await axios.get(
          `${apiBaseUrl}/meta?category=${notices
            .map((notice) => {
              if (notice.pathname === pathname) return notice.category;
              return undefined;
            })
            .filter((notice) => notice !== undefined)}`
        );

        setNoticeData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getApi();
    // eslint-disable-next-line
  }, [pathname]);

  const onClick = () => {
    console.log("click");
  };

  const notice = notices.map((notice) => {
    if (notice.pathname === pathname) {
      return (
        <Container key={Math.random()}>
          <Title>{notice.title}</Title>
          <Subtitle>이벤트 소식을 공지합니다</Subtitle>
          {loading ? (
            <div className="grid grid-cols-1 place-items-center">
              <img
                src="/Loading.gif"
                className="w-[6rem] opacity-40"
                alt="Loading.gif"
              />
            </div>
          ) : (
            <div className="overflow-x-hidden">
              <table className="max-md:flex flex-col items-between text-nowrap w-full">
                <thead>
                  <tr className="border-y border-black">
                    <th className="py-1 px-2 max-md:inline-block max-md:w-[65vw] text-start">
                      제목
                    </th>
                    <th className="py-1 px-2 max-md:inline-block max-md:w-[80px] text-start">
                      작성자
                    </th>
                    <th
                      className="py-1 px-2 max-md:inline-block max-md:w-[80px] text-start"
                      onClick={onClick}
                    >
                      날짜
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {noticeData.length
                    ? noticeData.map((notice) => {
                        return (
                          <tr key={notice._id}>
                            <td className="p-2 max-md:inline-block max-md:w-[65vw]">
                              <a
                                href={`${PATH.NOTICE_EVENTS}/${notice._id}`}
                                className="block truncate"
                              >
                                {notice.title}
                              </a>
                            </td>
                            <td className="p-2 max-md:inline-block max-md:w-[80px] font-semibold">
                              <div className="truncate">{notice.author}</div>
                            </td>
                            <td className="p-2 max-md:inline-block max-md:w-[80px]">
                              <div className="truncate">
                                {notice.date.split("T")[0]}
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : undefined}
                </tbody>
              </table>
            </div>
          )}
        </Container>
      );
    }
    return undefined;
  });

  return notice;
}
