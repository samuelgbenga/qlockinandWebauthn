import { baseApi } from "./base";

export async function getEmployeeDetail(options = {}) {
  const token = localStorage.getItem("token");

  const res = await baseApi.get(`api/v1/users/employee-details`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
  return res.data;
}
