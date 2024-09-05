import React, { useEffect } from "react";
import EmployeeCard from "../components/employeedetails/EmployeeCard";
import { useLoaderData } from "react-router-dom";
import { getAllEmployees } from "../api/getAllEmployees";
import FailToLoadPage from "./FailToLoadPage";




const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
    imageUrl: "https://avatar.iran.liara.run/public/boy?username=Ash",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Product",
    imageUrl: "https://avatar.iran.liara.run/public/boy?username=Ash",
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "UX Designer",
    department: "Design",
    imageUrl: "https://avatar.iran.liara.run/public/boy?username=Ash",
  },
  {
    id: 4,
    name: "Bob Brown",
    position: "Data Scientist",
    department: "Data",
    imageUrl: "https://avatar.iran.liara.run/public/boy?username=Ash",
  },
  {
    id: 5,
    name: "Eve Davis",
    position: "HR Specialist",
    department: "Human Resources",
    imageUrl:
      "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk",
  },
];

const EmployeesPage = () => {

  const data = useLoaderData();
  
  return (
    <div>
      <div className="flex flex-wrap">
        {employees.map((employee, index) => (
          <div key={index} className="p-4">
            <EmployeeCard employee={employee} />
          </div>
        ))}
      </div>
    </div>
  );
};



async function loader({ request: { signal } }) {
  const resp = await getAllEmployees({ signal });

  return resp;
}

export const allEmployeesRoute = {
  loader,
  errorElement: <FailToLoadPage message={"Employee List"} />,
  element: <EmployeesPage />,
};
