import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PATH } from "./routes/path";
import ScrollToTop from "./hooks/ScrollToTop";
import CloseNavigation from "./hooks/CloseNavigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CommitteePage from "./pages/CommitteePage";
import SponsorPage from "./pages/SponsorPage";
import LeaguesMapPage from "./pages/LeaguesMapPage";
import LeaguePage from "./pages/LeaguePage";
import EventsLatestPage from "./pages/EventsLatestPage";
import EventsArchivePage from "./pages/EventsArchivePage";
import NoticePage from "./pages/NoticePage";
import NoticeDetailPage from "./pages/NoticeDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/App.css";
import Popup from "./hooks/Popup";

function MainContainer({ children }) {
  return <main className="mt-16 md:mt-20">{children}</main>;
}

function App() {
  // prettier-ignore
  return (
    <Router>
      <Popup/>
      <Header />
      <ScrollToTop />
      <CloseNavigation />
      
      <MainContainer>
        <Routes>
          <Route path={PATH.HOME} Component={HomePage} />
          <Route path={PATH.ABOUT} Component={AboutPage} />
          <Route path={PATH.COMMITTEE} Component={CommitteePage} />
          <Route path={PATH.SPONSOR} Component={SponsorPage} />

          <Route path={PATH.LEAGUES_JUNIOR} Component={LeaguesMapPage} />
          <Route path={PATH.LEAGUES_JUNIOR_SOCCER} Component={LeaguePage} />
          <Route path={PATH.LEAGUES_JUNIOR_ONSTAGE} Component={LeaguePage} />
          <Route path={PATH.LEAGUES_JUNIOR_RESCUE} Component={LeaguePage} />

          <Route path={PATH.LEAGUES_SOCCER} Component={LeaguesMapPage} />
          <Route path={PATH.LEAGUES_SOCCER_HUMANOID} Component={LeaguePage} />
          <Route path={PATH.LEAGUES_SOCCER_STANDARD_PLATFORM} Component={LeaguePage} />
          <Route path={PATH.LEAGUES_SOCCER_MIDDLE_SIZE} Component={LeaguePage} />
          <Route path={PATH.LEAGUES_SOCCER_SMALL_SIZE} Component={LeaguePage} />
          <Route path={PATH.LEAGUES_SOCCER_SIMULATION} Component={LeaguePage} />

          <Route path={PATH.LEAGUES_RESCUE} Component={LeaguesMapPage} />
          <Route path={PATH.LEAGUES_RESCUE_ROBOT} Component={LeaguePage} />
          <Route path={PATH.LEAGUES_RESCUE_SIMULATION} Component={LeaguePage} />

          <Route path={PATH.LEAGUES_ATHOME} Component={LeaguesMapPage} />
          <Route path={PATH.LEAGUES_ATHOME_OPEN_PLATFORM} Component={LeaguePage} />
          <Route path={PATH.LEAGUES_ATHOME_DOMESTIC_STANDARD_PLATFORM} Component={LeaguePage} />
          <Route path={PATH.LEAGUES_ATHOME_SOCIAL_STANDARD_PLATFORM} Component={LeaguePage} />

          <Route path={PATH.LEAGUES_INDUSTRIAL} Component={LeaguesMapPage} />
          <Route path={PATH.LEAGUES_INDUSTRIAL_ROBOCUP_ATWORK} Component={LeaguePage} />
          <Route path={PATH.LEAGUES_INDUSTRIAL_LOGISTICS} Component={LeaguePage} />

          <Route path={PATH.EVENTS_LATEST} Component={EventsLatestPage} />
          <Route path={PATH.EVENTS_ARCHIVE} Component={EventsArchivePage} />

          <Route path={PATH.NOTICE_EVENTS} Component={NoticePage} />
          <Route path={PATH.NOTICE_EVENTS_DETAIL} Component={NoticeDetailPage} />
          <Route path={PATH.NOTICE_RULES} Component={NoticePage} />
          <Route path={PATH.NOTICE_RULES_DETAIL} Component={NoticeDetailPage} />
          
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </MainContainer>
      <Footer />
    </Router>
  );
}

export default App;
