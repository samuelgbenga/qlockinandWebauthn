import React from "react";

const UnauthorizePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">401</h1>
      <p className="mt-4 text-xl text-gray-700">Unauthorized access. Please log in to continue.</p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default UnauthorizePage;
