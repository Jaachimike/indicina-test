import { useState } from "react";
import React from "react";

const EncodeForm = () => {
  const [originalUrl, setOriginalUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add functionality to encode the URL
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <input
        type="text"
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
  );
};

export default EncodeForm;
