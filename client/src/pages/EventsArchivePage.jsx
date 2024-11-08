import { useTranslation } from "react-i18next";
import { Container, Title, Subtitle } from "../components/layouts";

export default function EventsArchivePage() {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const banners = [
    "/banners/2023_CCC.jpg",
    "/banners/2023_RCAP_KR.png",
    "/banners/2024_RCOPEN.png",
  ];

  return (
    <Container>
      <Title>{t("menu.main.item.events_archive")}</Title>
      <Subtitle>{language === "ko" && "역대 개최된 이벤트입니다"}</Subtitle>
      <div className="grid md:grid-cols-2 flex justify-center items-center">
        {banners.map((src) => (
          <img src={src} className="pb-2" alt="not found" />
        ))}
      </div>
    </Container>
  );
}
