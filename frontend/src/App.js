import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ScrollToTop";
import { GlobalVideoBackground } from "./components/GlobalVideoBackground";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { WorkPage } from "./pages/WorkPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      {!isLoading && <GlobalVideoBackground />}
      <BrowserRouter>
        <div className="App relative z-10">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
