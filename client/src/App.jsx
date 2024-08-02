import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PATH } from "./routes/path";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import CommitteePage from "./pages/CommitteePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH.MAIN} Component={MainPage} />
        <Route path={PATH.ABOUT} Component={AboutPage} />
        <Route path={PATH.COMMITTEE} Component={CommitteePage} />
      </Routes>
    </Router>
  );
}

export default App;
