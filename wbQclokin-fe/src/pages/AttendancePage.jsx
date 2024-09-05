// Import necessary components
import React, { useState } from 'react';
import { AbsenteeismPage } from './AbsenteeismPage';
import { LatecomerReport } from './LatecomerReport';
import { OvertimeReport } from './OvertimeReport'; // Import the OvertimeReport component
import AddEmployeeModal from '../components/modals/AddEmployeeModal';
import { getAbsenteeismReport, getAttendanceReport, getLateComerReport, getOverTimeReport } from '../api/getAttendance';
import FailToLoadPage from './FailToLoadPage';
import { useLoaderData } from 'react-router-dom';


 const AttendancePage = () => {
  const [activeTab, setActiveTab] = useState('attendance'); // Default to 'attendance'
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {attandenceReport, absenteeismReport, latecomerReport, overtimeReport} = useLoaderData();

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Conditionally render tabs */}
      <div className="flex space-x-4 border-b-2 pb-2 mb-4">
        <button
          className={`font-bold ${activeTab === 'attendance' ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('attendance')} // Switch to attendance report
        >
          Attendance Report
        </button>
        <button
          className={`font-bold ${activeTab === 'absenteeism' ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('absenteeism')} // Switch to absenteeism report
        >
          Absenteeism Report
        </button>
        <button
          className={`font-bold ${activeTab === 'latecomer' ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('latecomer')} // Switch to latecomer report
        >
          Latecomers Report
        </button>
        <button
          className={`font-bold ${activeTab === 'overtime' ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('overtime')} // Switch to overtime report
        >
          Overtime Report
        </button>
      </div>

      {/* Render content based on the active tab */}
      {activeTab === 'attendance' && (
        <div>
          {/* Attendance Page Content */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700 font-semibold text-lg">
              Monday 12 June 2023 - <span className="text-gray-500">Clock in by 8:30 AM, clock out at 5:00 PM</span>
            </p>
            <div className="flex space-x-3">
              <button className="text-gray-500 border rounded px-4 py-2">Filters</button>
              <button className="bg-gray-200 rounded px-4 py-2">Export</button>
              <button className="bg-purple-500 text-white rounded px-4 py-2" onClick={handleOpenModal}>+ Add Employees</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left"><input type="checkbox" /></th>
                  <th className="px-4 py-2 text-left">User ID</th>
                  <th className="px-4 py-2 text-left">Full Name</th>
                  <th className="px-4 py-2 text-left">Clock-In</th>
                  <th className="px-4 py-2 text-left">Clock-Out</th>
                  <th className="px-4 py-2 text-left">Total Hours</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {Array(10).fill().map((_, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-2"><input type="checkbox" /></td>
                    <td className="px-4 py-2">10234</td>
                    <td className="px-4 py-2">Ademide Adedimeji</td>
                    <td className="px-4 py-2">8:30 AM</td>
                    <td className="px-4 py-2">5:30 PM</td>
                    <td className="px-4 py-2">9 hours</td>
                    <td className="px-4 py-2">
                      <span className="text-green-500 font-bold">● Early</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         
        </div>
      )}

      {activeTab === 'absenteeism' && <AbsenteeismPage onOpen={handleOpenModal} data={absenteeismReport}/>}
      {activeTab === 'latecomer' && <LatecomerReport onOpen={handleOpenModal} data={latecomerReport}/>}
      {activeTab === 'overtime' && <OvertimeReport onOpen={handleOpenModal} data={overtimeReport}/>} {/* Render OvertimeReport when activeTab is 'overtime' */}

      {isModalOpen && <AddEmployeeModal onClose={handleOpenModal} />}
    </div>
  );
};


async function loader({ request: { signal } }) { 

  const attandenceReport = await getAttendanceReport({ signal });
  
  const absenteeismReport = await getAbsenteeismReport({signal});

  const latecomerReport = await getLateComerReport({signal});

  const overtimeReport = await getOverTimeReport({signal})

  
  

  return {attandenceReport, absenteeismReport, latecomerReport, overtimeReport};
}

export const attendancePageRoute = {
  loader,
  errorElement: <FailToLoadPage message={"Attandance List"} />,
  element: <AttendancePage />,
};