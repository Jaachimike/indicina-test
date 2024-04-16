import React from "react";
import Statistics from "../components/Statistics";

const StatisticsPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      {" "}
      <h1 className="text-3xl font-bold text-center">
        URL Shortener - Statistics
      </h1>
      <Statistics />
    </div>
  );
};

export default StatisticsPage;
