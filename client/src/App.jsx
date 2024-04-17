import { useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import EncodePage from "./pages/EncodePage";
import DecodePage from "./pages/DecodePage";
import StatisticsPage from "./pages/StatisticsPage";
import RedirectPage from "./pages/RedirectPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element={<EncodePage />} />
        <Route path="/decode" element={<DecodePage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/:shortUrlId" element={<RedirectPage />} />
      </Routes>
    </div>
  );
}

export default App;
