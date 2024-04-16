import { useState } from "react";
import React from "react";

const EncodeForm = () => {
  const [originalUrl, setOriginalUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add functionality to encode the URL
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>I work</h1>
      <input
        type="text"
        placeholder="Enter URL to shorten"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <button type="submit">Shorten URL</button>
    </form>
  );
};

export default EncodeForm;
