import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const EncodeForm = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/encode", {
        originalUrl,
      });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error("Error encoding URL:", error);
      // Handle error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <input
          type="url"
          placeholder="Enter URL to shorten"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="w-full py-2 px-4 mb-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
        >
          Shorten URL
        </button>
      </form>

      {shortUrl && (
        <div className="mt-4 text-center font-semibold">
          <p>
            {" "}
            Your Shortened URL is:{" "}
            <span>
              {" "}
              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {`https://short.est/${shortUrl}`}
              </a>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default EncodeForm;
