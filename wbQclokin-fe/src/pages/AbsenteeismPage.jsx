import React from "react";

export const AbsenteeismPage = ({ onOpen, data }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700 font-semibold text-lg">
          1-30 June 2023 -{" "}
          <span className="text-gray-500">
            Clock in by 8:30 AM, clock out at 5:00 PM
          </span>
        </p>
        <div className="flex space-x-3">
          <button className="text-gray-500 border rounded px-4 py-2">
            Filters
          </button>
          <button className="bg-gray-200 rounded px-4 py-2">Export</button>
          <button
            className="bg-purple-500 text-white rounded px-4 py-2"
            onClick={onOpen}
          >
            + Add Employees
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2 text-left">User ID</th>
              <th className="px-4 py-2 text-left">Full Name</th>
              <th className="px-4 py-2 text-left">Absent Days</th>
              <th className="px-4 py-2 text-left">Total Work Days</th>
              <th className="px-4 py-2 text-left">Absenteeism Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Rows */}
            {Array(10)
              .fill()
              .map((_, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2">10234</td>
                  <td className="px-4 py-2">Ademide Adedimeji</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">20</td>
                  <td className="px-4 py-2">10%</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
