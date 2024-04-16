import React, { useState } from "react";

const DecodeForm = () => {
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add functionality to decode the shortened URL
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter shortened URL"
        value={shortenedUrl}
        onChange={(e) => setShortenedUrl(e.target.value)}
      />
      <button type="submit">Decode URL</button>
    </form>
  );
};

export default DecodeForm;
