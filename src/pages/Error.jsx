import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex-col mt-5">
      <h1 className="text-2xl text-red-800">Error: page not found</h1>
      <Link to="/">&larr; Back Home</Link>
    </div>
  );
};

export default Error;
