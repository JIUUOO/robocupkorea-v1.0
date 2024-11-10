import { useEffect } from "react";
import { Container, Title, Subtitle } from "../components/layouts";
import "../styles/EventsLatestPage.css";
import {
  initializeScrollBehavior,
  cleanupScrollBehavior,
} from "../styles/scrollBehavior";

export default function EventsLatestPage() {
  useEffect(() => {
    initializeScrollBehavior();

    return () => cleanupScrollBehavior();
  }, []);
  return (
    <Container className="events-latest-page">
      <Title>
        <div className="text-2xl">제 5회</div>
        <div className="text-rose-700">한국창의코딩대회</div>
      </Title>
      <Subtitle>Creative Coding Challenge Korea 2024</Subtitle>

      <div className="right-position">
        <div className="flex justify-end mb-5">
          <div className="content bg-sky-500/100 flex items-center justify-center text-white w-80 h-16 rounded-lg">
            Rescue Basic(U12,U19)
          </div>
        </div>

        <div className="flex justify-end mb-5">
          <div className="content bg-sky-500/80 flex items-center justify-center text-white w-80 h-16 rounded-lg">
            Maze Basic(U12,U19)
          </div>
        </div>

        <div className="flex justify-end mb-5">
          <div className="content bg-sky-500/60 flex items-center justify-center text-white w-80 h-16 rounded-lg">
            OnStage(Open)
          </div>
        </div>

        <div className="flex justify-end mb-5">
          <div className="content bg-blue-500/60 flex items-center justify-center text-white w-80 h-16 rounded-lg">
            iCool Challenge
            <br /> CospaceRescue(U12,U19)
          </div>
        </div>

        <div className="flex justify-end mb-5">
          <div className="content bg-blue-500/80 flex items-center justify-center text-white w-80 h-16 rounded-lg">
            iCool Challenge
            <br /> Autonomous Driving(FS, U12,U19)
          </div>
        </div>

        <div className="flex justify-end mb-5">
          <div className="content bg-blue-500/100 flex items-center justify-center text-white w-80 h-16 rounded-lg">
            Rookie Challeng(초등 1-2)
          </div>
        </div>
      </div>

      <ol className="list-decimal list-inside text-rose-700">
        <li>
          <div className="inline">
            일정 :
            <ol className="list-decimal list-inside ml-5 brancket-counter text-black">
              <li>Setup : 8.14. 13:00 - 17:00</li>
              <li>대회 : 8.15. 09:00 - 17:00</li>
              <li>Lego Land 체험학습 : 8.16. 10:00 - 17:00</li>
            </ol>
          </div>
        </li>

        <li>
          <div className="inline">
            장소 :{" "}
            <span className="text-black">
              호반체육관, 레고랜드. 춘천. 강원도
            </span>
          </div>
        </li>

        <li>
          <div className="inline">
            주최 :
            <span className="text-black"> (사)한국로보컵협회, 로봇신문</span>
          </div>
        </li>

        <li>
          <div className="inline">
            후원 :{" "}
            <span className="text-black">
              춘천시, 춘천시의회, 한국로봇융합연구원, Lego Land Korea
            </span>
          </div>
        </li>

        <li>
          <div className="inline">
            종목
            <div className="list-inside"></div>
            <ol className="brancket-counter ml-5 text-black">
              <li>Basic League</li>
              <ul className="list-disc ml-5">
                <li>RescueBasic(U12, U19)</li>
                <li>MazeBasic(U12, U19)</li>
                <li>OnStage(Open)</li>
              </ul>
              <li>RCAP League</li>
              <ul className="list-disc ml-5">
                <li>iCool Challenge CoSpace Rescue(U12, U19)</li>
                <li>iCool Challenge Autonomous Driving(FS, U12, U19)</li>
                <li>OnStage(Open)</li>
              </ul>
              <li>Rookie League</li>
              <ul className="list-disc ml-5">
                <li>Rookie Challenge(초등 1-2)</li>
              </ul>
            </ol>
          </div>
        </li>

        <li>
          <div className="inline">
            기타{" "}
            <ol className="brancket-counter ml-5 text-black">
              <li>
                CCC2024는 국내 및 해외의 꿈나무들이 참여하는 로봋 및 AI증진,
                {<br />}
                레고랜드 체험학습 행사입니다.
              </li>
              <li>
                브릭으로 제작한 다양한 로봇 작품인 "TONY Bricks 로봇전시체험"
                {<br />}
                이벤트 진행(8/15)
              </li>
              <li>참가자특전</li>
              <ul className="list-disc ml-5 text-blue-600">
                <li>대회 기념 메달 및 셔츠 증정</li>
                <li>
                  본행사의 일부 종목 상위 입상팀은 10월에 개최되는 RoboCup
                  Austrailia Open 2024{<br />}
                  국제 대회 출전 자격이 주어집니다.
                </li>
              </ul>
              <li>행사 내용 및 일정은 사정에 따라 변경될 수 있습니다.</li>
              <li>
                행사 관련 기타 의문사항은 협회 사무국으로
                문의바랍니다.(x_iah@naver.com)
              </li>
            </ol>
          </div>
        </li>
      </ol>

      <div className="font-bold ml-8 mt-3">
        주최: (사)한국로보컵협회,
        <br />
        주관: (사)한국로보컵협회, 로봇신문
        <br />
        후원: 춘천시, 춘천시의회, 한국로봇융합연구원, Lego Land Korea
      </div>
      <div className="mt-5 mb-5 flex justify-center">
        <iframe
          title="map1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.871843885177!2d127.7535481758491!3d37.8632889719632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3562e5afb78335db%3A0xdc925b533affd7c6!2z7LaY7LKc7Zi467CY7LK07Jyh6rSA!5e0!3m2!1sko!2skr!4v1721979589038!5m2!1sko!2skr"
          className="aspect-video w-full max-w-2xl"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
}
