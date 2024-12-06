import {
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
} from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { Container, Title, Subtitle } from "../components/layouts";
import { useTranslation } from "react-i18next";
import { BreakpointContext } from "../contexts/BreakpointContext";

export default function NoticeDetailPage() {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const { pathname } = useLocation();

  const [documentWidth, setDocumentWidth] = useState();
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
  const containerRef = useRef();

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

  const [isDocumentLoadSucess, setDocumentLoadSuccess] = useState(false);
  const [numPages, setNumpages] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      isDesktopView
        ? setDocumentWidth(containerRef.current.clientWidth * 0.8)
        : setDocumentWidth(containerRef.current.clientWidth);
    }
  }, [innerWidth, isDocumentLoadSucess]);

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
          <div className="min-h-10">{notice.content}</div>

          <div className="mb-4" ref={containerRef}>
            {files.length > 0 && files[0].type === "application/pdf" && (
              <Document
                file={`${apiBaseUrl}/file/${files[0]._id}/${files[0].name}`}
                onLoadSuccess={({ numPages }) => {
                  setNumpages(numPages);
                  setDocumentLoadSuccess(true);
                }}
              >
                {pathname.includes("67528c8e4764ab48ae249894") ||
                pathname.includes("6752935a4764ab48ae24989b") ? (
                  Array.from({ length: numPages }, (_, index) => (
                    <Page
                      key={index}
                      pageNumber={index + 1}
                      className="border border-1 max-w-fit"
                      width={documentWidth}
                    />
                  ))
                ) : (
                  <Page
                    pageNumber={1}
                    className="border border-1 max-w-fit"
                    width={documentWidth}
                  />
                )}
              </Document>
            )}
            {(pathname.includes("67528c8e4764ab48ae249894") ||
              pathname.includes("6752935a4764ab48ae24989b")) && (
              <a
                className="mt-8 mb-10 inline-flex justify-center items-center px-5 py-2 rounded bg-blue-600 hover:bg-blue-800 text-white"
                href="https://robocupkorea-c2bf28e61bde.herokuapp.com/api/NoticeBoard/file/67528c8e4764ab48ae249896/Application_Form_RCKO_2025.xlsx"
              >
                {language === "ko" ? "사전 등록하기" : "Pre-Registration"}
              </a>
            )}
          </div>

          <div className="text-xl pb-2">
            {language === "ko" ? "첨부파일" : "Attached document"}
          </div>
          <div className="ml-2">
            <ul>
              {files.map((file) => {
                return (
                  <li key={file._id}>
                    {!file.name.includes("xlsx") && (
                      <div className="inline-block mb-2 font-light underline underline-offset-4 decoration-1 decoration-zinc-300 hover:decoration-zinc-700 rounded-lg">
                        <a href={`${apiBaseUrl}/file/${file._id}/${file.name}`}>
                          {file.name}
                        </a>
                      </div>
                    )}
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
