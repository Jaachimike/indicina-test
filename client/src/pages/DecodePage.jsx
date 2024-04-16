import React from "react";
import DecodeForm from "../components/DecodeForm";

const DecodePage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <h1 className="text-3xl font-bold text-center">
        URL Shortener - Decode URL
      </h1>
      <DecodeForm />
    </div>
  );
};

export default DecodePage;
