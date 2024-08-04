import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PATH } from "./routes/path";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import CommitteePage from "./pages/CommitteePage";
import EventsLatestPage from "./pages/EventsLatestPage";
import EventsArchivePage from "./pages/EventsArchivePage";
import NoticeEventsPage from "./pages/NoticeEventsPage";
import NoticeRulesPage from "./pages/NoticeRulesPage";
import NoticeDetailPage from "./pages/NoticeDetailPage";
import ScrollToTop from "./hooks/ScrollToTop";
import CloseNav from "./hooks/CloseNav";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <CloseNav />
      <main className="mt-16 md:mt-20">
        <Routes>
          <Route path={PATH.MAIN} Component={MainPage} />
          <Route path={PATH.ABOUT} Component={AboutPage} />
          <Route path={PATH.COMMITTEE} Component={CommitteePage} />
          <Route path={PATH.EVENTS_LATEST} Component={EventsLatestPage} />
          <Route path={PATH.EVENTS_ARCHIVE} Component={EventsArchivePage} />
          <Route path={PATH.NOTICE_EVENTS} Component={NoticeEventsPage} />
          <Route
            path={PATH.NOTICE_EVENTS_DETAIL}
            Component={NoticeDetailPage}
          />
          <Route path={PATH.NOTICE_RULES} Component={NoticeRulesPage} />
          <Route path={PATH.NOTICE_RULES_DETAIL} Component={NoticeDetailPage} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
