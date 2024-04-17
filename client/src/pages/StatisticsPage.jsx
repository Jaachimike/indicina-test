import React, { useState, useEffect } from "react";
import axios from "axios";
import Statistics from "./Statistics";
import { Link } from "react-router-dom"; // Import Link from React Router

const StatisticsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/data");
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-16">
      {" "}
      <h1 className="text-3xl font-bold text-center">
        URL Shortener - Statistics
      </h1>
      <div className="flex justify-center mt-8">
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th>Original URL</th>
              <th>Shortened URL</th>
              <th>Statistics</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="">
                <td>
                  <a
                    href={item.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {item.originalUrl}
                  </a>
                </td>

                <td>
                  <a
                    href={item.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 "
                  >
                    {`https://short.est/${item.shortUrl}`}
                  </a>
                </td>

                <td>
                  <Link
                    to={`/statistic/${item.shortUrl}`}
                    className="bg-blue-800 text-white font-semibold px-3 py-2"
                  >
                    View Statistics
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatisticsPage;
