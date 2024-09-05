import React from 'react';
import { getEmployeeDetail } from '../../api/getEmployeeDetail';
import FailToLoadPage from '../../pages/FailToLoadPage';
import { useLoaderData } from 'react-router-dom';





const AttendanceReport = () => {

  const data = useLoaderData();

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex space-x-4 border-b-2 pb-2 mb-4">
        <button className="text-purple-500 font-bold">Attendance Report</button>
        <button className="text-gray-500">Absenteeism Report</button>
        <button className="text-gray-500">Latecomers Report</button>
        <button className="text-gray-500">Overtime Report</button>
      </div>

      {/* Filters and Export */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-500">June 2023 - Clock in by 8:30 AM, clock out at 5:00 PM.</p>
        <div className="flex space-x-2">
          <button className="text-gray-500 border rounded px-4 py-2">Filters</button>
          <button className="bg-gray-200 rounded px-4 py-2">Export</button>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Clock-In</th>
              <th className="px-4 py-2 text-left">Clock-Out</th>
              <th className="px-4 py-2 text-left">Total Hours</th>
              <th className="px-4 py-2 text-left">Biometric</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array(10).fill().map((_, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">Monday, 12 June 2023</td>
                <td className="px-4 py-2">8:30 AM</td>
                <td className="px-4 py-2">5:30 PM</td>
                <td className="px-4 py-2">9 hours</td>
                <td className="px-4 py-2 text-center">
                  <span role="img" aria-label="biometric">👆</span>
                </td>
                <td className="px-4 py-2">
                  <span className={`text-green-500 font-bold`}>● Early</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


async function loader({ request: { signal } }) {
  const resp = await getEmployeeDetail({ signal });

  return resp;
}

export const employeeAttendanceRoute = {
  loader,
  errorElement: <FailToLoadPage message={"User Details"} />,
  element: <AttendanceReport />,
};