import { useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import EncodePage from "./pages/EncodePage";
import DecodePage from "./pages/DecodePage";
import StatisticsPage from "./pages/StatisticsPage";
import RedirectPage from "./pages/RedirectPage";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element={<EncodePage />} />
        <Route path="/decode" element={<DecodePage />} />
        <Route path="/statistic" element={<StatisticsPage />} />
        <Route path="/:shortUrlId" element={<RedirectPage />} />
        <Route path="/statistic/:shortUrl" element={<Statistics />} />
      </Routes>
    </div>
  );
}

export default App;
