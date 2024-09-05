import React from "react";

export const Navbar = ({userInfo}) => {
  // Get the current date and time
  const currentDate = new Date();

  // Format the date to "Monday, 12 June 2023"
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-UK', options);



  

  return (
    <div className="flex justify-between items-center p-4 bg-white">
      {/* Date Section */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 3v1.5m7.5-1.5v1.5M3 9.75h18M4.5 6.75h15A2.25 2.25 0 0121.75 9v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 19.5V9a2.25 2.25 0 012.25-2.25z"
          />
        </svg>
        <span className="text-black font-medium">
          {formattedDate}
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-2">
        <img
          src={`${userInfo.photoUrl? userInfo.photoUrl: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk"}`} // Replace with the actual image URL
          alt="Desmond"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-black font-medium">{userInfo.fullName}</span>
      </div>
    </div>
  );
};
