import { useContext, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { Container, Title, Subtitle } from "../components/layouts";
import { useTranslation } from "react-i18next";
import { BreakpointContext } from "../contexts/BreakpointContext";

export default function NoticeDetailPage() {
  const { t } = useTranslation();

  const { innerWidth, isDesktopView } = useContext(BreakpointContext);
  const [loading, setLoading] = useState(true);
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

  useLayoutEffect(() => {
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
        setLoading(false);
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
      <Subtitle>{t("menu.main.head.notices")}</Subtitle>

      {loading ? (
        <div className="grid grid-cols-1 place-items-center">
          <img
            src="/Loading.gif"
            className="w-[6rem] opacity-40"
            alt="Loading.gif"
          />
        </div>
      ) : (
        <div>
          <div className="min-h-10 pb-6">{notice.content}</div>
          <div>
            <ul>
              {files.length > 0 && files[0].type === "application/pdf" && (
                <Document
                  file={`${apiBaseUrl}/file/${files[0]._id}/${files[0].name}`}
                >
                  <Page
                    pageNumber={1}
                    className="border border-1 max-w-fit"
                    scale={isDesktopView ? 1.0 : innerWidth / 768}
                  />
                </Document>
              )}
            </ul>
          </div>
          <div>
            <ul>
              {files.map((file) => {
                return (
                  <li key={file._id}>
                    <div className="inline-block mb-2 font-light underline underline-offset-4 decoration-1 decoration-zinc-300 hover:decoration-zinc-700 rounded-lg">
                      <a href={`${apiBaseUrl}/file/${file._id}/${file.name}`}>
                        {file.name}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-right font-light pt-10">
            {notice.date
              ? `${notice.author}/${notice.date.split("T")[0]}`
              : undefined}
          </div>
        </div>
      )}
    </Container>
  );
}
