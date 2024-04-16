import React from "react";
import EncodeForm from "../components/EncodeForm";

const EncodePage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <h1 className="text-3xl font-bold text-center">
        URL Shortener - Encode URL
      </h1>
      <EncodeForm />
    </div>
  );
};

export default EncodePage;
