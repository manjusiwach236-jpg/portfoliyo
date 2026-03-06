import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import FrontendScreenshots from "./Pages/FrontendScreenshots.jsx";
import BackendScreenshots from "./Pages/BackendScreenshots.jsx";

import { ROUTES } from "./routes";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.SCREENSHOTS_FRONTEND} element={<FrontendScreenshots />} />
        <Route path={ROUTES.SCREENSHOTS_BACKEND} element={<BackendScreenshots />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);