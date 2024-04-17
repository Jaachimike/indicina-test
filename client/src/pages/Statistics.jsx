import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Statistics = () => {
  const { shortUrl } = useParams();
  const [statistics, setStatistics] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/statistic/${shortUrl}`
        );
        setStatistics(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching statistics:", error);
        setLoading(false);
      }
    };

    fetchStatistics();
  }, [shortUrl]);

  const date = new Date(statistics.createdAt);
  const formattedDateTime = date.toLocaleString();

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <h1 className="text-3xl font-bold text-center">
        Statistics for {statistics.shortUrl}
      </h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : statistics ? (
        <div className="mt-8">
          <p>
            Original URL:{" "}
            <span>
              <a href={statistics.originalUrl}> {statistics.originalUrl}</a>
            </span>
          </p>
          <p>Shortened URL: {`https://short.est/${statistics.shortUrl}`} </p>
          <p>Clicks: {statistics.clicks}</p>
          <p>Time Created: {formattedDateTime}</p>
          {/* Add more statistics here as needed */}
        </div>
      ) : (
        <p className="text-center">
          No statistics found for the provided short URL.
        </p>
      )}
    </div>
  );
};

export default Statistics;
