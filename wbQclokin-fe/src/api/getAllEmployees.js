import { baseApi } from "./base";

export async function getAllEmployees(options = {}) {
  const token = localStorage.getItem("token");

  const res = await baseApi.get(`api/v1/users/all-employees`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
  return res.data;
}
