import React, { useState } from "react";
import axios from "axios";

const DecodeForm = () => {
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add functionality to decode the shortened URL
    try {
      const response = await axios.post("http://localhost:5000/decode", {
        shortenedUrl,
      });
      setOriginalUrl(response.data);
    } catch (error) {
      console.error("Error encoding URL:", error);
      // Handle error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <input
          type="text"
          placeholder="Enter shortened URL"
          value={shortenedUrl}
          onChange={(e) => setShortenedUrl(e.target.value)}
          className="w-full py-2 px-4 mb-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
        >
          Decode URL
        </button>
      </form>
      {originalUrl && (
        <div className="mt-4 text-center font-semibold">
          <p>
            {" "}
            Your Shortened URL is:{" "}
            <span>
              {" "}
              <a
                href={originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {originalUrl}
              </a>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DecodeForm;
