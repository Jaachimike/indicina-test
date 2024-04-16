import React, { useState } from "react";

const DecodeForm = () => {
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add functionality to decode the shortened URL
  };

  return (
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
  );
};

export default DecodeForm;
