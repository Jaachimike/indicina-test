import React, { useState, useEffect } from "react";
import axios from "axios";
import EncodeForm from "../components/EncodeForm";

const EncodePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <h1 className="text-3xl font-bold text-center">
        URL Shortener - Encode URL
      </h1>
      <EncodeForm />
      <h3 className="text-xl font-bold text-center  mt-16 mb-6">HISTORY</h3>
      <div className="flex justify-center">
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Original URL</th>
              <th>Shortened URL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
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
                    className="text-blue-500"
                  >
                    {`https://short.est/${item.shortUrl}`}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EncodePage;
