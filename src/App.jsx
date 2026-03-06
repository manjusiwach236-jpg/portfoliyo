// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FrontendScreenshots from "./Pages/FrontendScreenshots";
import BackendScreenshots from "./Pages/BackendScreenshots";
import { ROUTES } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.SCREENSHOTS_FRONTEND} element={<FrontendScreenshots />} />
        <Route path={ROUTES.SCREENSHOTS_BACKEND} element={<BackendScreenshots />} />
      </Routes>
    </Router>
  );
}

export default App;