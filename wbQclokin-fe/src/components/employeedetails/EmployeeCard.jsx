import React from "react";
import { Link } from "react-router-dom";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="w-64 h-[18rem] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative bg-[#d5c0e2] h-1.5/5">
        <img
          className="relative inset-x-0 w-20 h-20 rounded-full shadow-lg bg-white mx-auto top-10"
          src={employee.imageUrl}
          alt={employee.name}
        />
      </div>
      <div className="h-3.5/5 p-2 text-center">
        <div className="h-10"></div>
        <h1 className="text-xl font-semibold text-gray-800">{employee.name}</h1>
        <p className="text-gray-400 text-sm">{employee.position}</p>
        <div className="mt-10">
          <span className=" p-2 px-4 rounded bg-gray-200">
            <Link to={`/dashboard/${employee.id}`}>View my profile</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
