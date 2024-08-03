import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Title, Subtitle } from "../components/layouts";
import axios from "axios";

export default function NoticeDetailPage() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const { id } = useParams();
  const [notice, setNotice] = useState({
    author: null,
    date: null,
    title: null,
    content: null,
    files: [],
    category: null,
  });

  const [files, setFiles] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const { data } = await axios.get(`${apiBaseUrl}/${id}`);
        setNotice(data);

        const fileRequest = data.files.map((id) =>
          axios.get(`${apiBaseUrl}/file/meta/${id}`)
        );
        const fileRespond = await Promise.all(fileRequest);
        const fileData = fileRespond.map((respond) => respond.data);
        setFiles(fileData);
      } catch (error) {
        console.log(error);
      }
    };

    getApi();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Title>{notice.title}</Title>
      <Subtitle>공지사항</Subtitle>
      <div>
        <div className="min-h-10 pb-6">{notice.content}</div>
        <div>
          <ul>
            {files.length
              ? files.map((file) => {
                  return (
                    <li key={file._id}>
                      <div className="inline-block p-1.5 mb-2 border rounded-lg">
                        <a href={`${apiBaseUrl}/file/${file._id}/${file.name}`}>
                          {file.name}
                        </a>
                      </div>
                    </li>
                  );
                })
              : undefined}
          </ul>
        </div>
        <div className="text-right font-light pt-10">
          {notice.date
            ? `${notice.author}/${notice.date.split("T")[0]}`
            : undefined}
        </div>
      </div>
    </Container>
  );
}
