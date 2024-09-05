import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/HomeIcon";
import AttendanceIcon from "../../assets/AttendanceIcon";
import EmployeesIcon from "../../assets/EmployeesIcon";
import SettingsIcon from "../../assets/SettingsIcon";
import LogoutIcon from "../../assets/LogoutIcon";


const SideBar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-sm border-r-1 border-gray-200">
      <nav className="p-4">
        <div className="text-3xl font-bold text-purple-600">Qlock-In</div>
        <ul className="mt-10">
          <li className="flex items-center justify-between p-4 hover:bg-gray-100 hover:text-purple-600 hover:border-l-4 hover:border-purple-600 cursor-pointer text-gray-600 border-l-4 border-transparent">
            <Link to="/dashboard" className="flex items-center w-full">
              <HomeIcon className="mr-4" />
            
              <span>Dashboard</span>
            </Link>
            <div className="w-1 h-full bg-purple-600"></div> {/* Purple vertical bar */}
          </li>
          <li className="flex items-center justify-between p-4 hover:bg-gray-100 hover:text-purple-600 hover:border-l-4 hover:border-purple-600 cursor-pointer text-gray-600 border-l-4 border-transparent">
            <Link to="/dashboard/attendance" className="flex items-center w-full">
              <AttendanceIcon className="mr-4" />
              <span>Attendance Report</span>
            </Link>
          </li>
          <li className="flex items-center justify-between p-4 hover:bg-gray-100 hover:text-purple-600 hover:border-l-4 hover:border-purple-600 cursor-pointer text-gray-600 border-l-4 border-transparent">
            <Link to="/dashboard/employees" className="flex items-center w-full">
              <EmployeesIcon className="mr-4" />
              <span>Employees</span>
            </Link>
          </li>
          <li className="flex items-center justify-between p-4 hover:bg-gray-100 hover:text-purple-600 hover:border-l-4 hover:border-purple-600 cursor-pointer text-gray-600 border-l-4 border-transparent">
            <Link to="/dashboard/setting" className="flex items-center w-full">
              <SettingsIcon className="mr-4" />
              <span>Settings</span>
            </Link>
          </li>
          <li className="flex items-center justify-between p-4 hover:bg-gray-100 hover:text-purple-600 hover:border-l-4 hover:border-purple-600 cursor-pointer text-gray-600 border-l-4 border-transparent">
            <Link to="/" className="flex items-center w-full">
              <LogoutIcon className="mr-4" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
