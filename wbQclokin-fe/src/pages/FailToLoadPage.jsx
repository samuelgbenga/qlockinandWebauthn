import React from "react";

const FailToLoadPage = ({message}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">500</h1>
      <p className="mt-4 text-xl text-gray-700">Oops! Something went wrong. The {message} could not be loaded.</p>  
    </div>
  );
};

export default FailToLoadPage;
