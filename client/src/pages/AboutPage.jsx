import { useTranslation } from "react-i18next";
import { Container, Title, Subtitle } from "../components/layouts";

export default function About() {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const articles = [
    {
      href: "https://www.irobotnews.com/news/articleView.html?idxno=35753",
      title: "'제5회 한국창의코딩대회', 이달 15일 개최",
      subtitle: "춘천시 호반체육관에서 7개 종목 경기 펼쳐",
    },
    {
      href: "https://www.irobotnews.com/news/articleView.html?idxno=34077",
      title: "2024 코리아 로보컵 오픈대회 18일 성료",
      subtitle:
        "4개국 500여명 참가해 열띤 경쟁 벌여...휴머노이드 축구 키즈 국민대 쿠도스 12기 팀 승리",
    },
  ];

  return (
    <Container>
      <Title>{t("menu.main.item.about")}</Title>
      <Subtitle>
        {language === "ko" ? "한국로보컵협회를 소개합니다" : "Introducing RCKA"}
      </Subtitle>
      <div className="pb-5">
        <iframe
          className="w-full aspect-video max-w-md"
          src="https://www.youtube.com/embed/OoY9wlojwzQ"
          title="국제 로봇월드컵 개막…“2050년 사람과도 경기할 것” / KBS  2023.12.08."
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpplicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col">
        {language === "ko" &&
          articles.map((article) => (
            <div key={article.href}>
              <div className="flex pb-5">
                <div className="mr-3">
                  <img
                    src="/logos/Robot_News.png"
                    className="min-w-32 max-w-32"
                    alt="Robot_News.png"
                  />
                </div>
                <div className="w-[50vw]">
                  <a
                    href={article.href}
                    className="hover:underline underline-offset-2 transition ease-in-out duration-50 cursor-pointer"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <p className="pt-[9px] truncate">{article.title}</p>
                    <p className="text-sm font-light truncate">
                      {article.subtitle}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
}
