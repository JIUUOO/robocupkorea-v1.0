import { useTranslation } from "react-i18next";
import { Container, Subtitle, Title } from "../components/layouts";

export default function SponsorPage() {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  return (
    <Container>
      <Title>{t("menu.main.item.sponser")}</Title>
      <Subtitle>
        {language === "ko"
          ? "후원금은 로봇 꿈나무들을 양성하고 AI, Robotics 교육증진을 위한 각종 목적을 위해 사용됩니다."
          : "Donations are used to nurture future robotics talent and to promote AI and robotics education for various purposes."}
      </Subtitle>
      <div>
        {language === "ko" ? "후원 문의" : "Sponsorship Inquiries"}:
        x_iah@naver.com
      </div>
    </Container>
  );
}
