import { baseApi } from "./base";

export const addEmployeeApi = async (employeeData, options) => {
  const token = localStorage.getItem("token");

  const response = await baseApi.post(
    "api/v1/users/add-employee",
    employeeData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      ...options,
    }
  );
  return response.data;
};
