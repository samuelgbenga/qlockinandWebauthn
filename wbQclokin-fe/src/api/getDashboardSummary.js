import { baseApi } from "./base";

export async function getDashboardSummary(options = {}) {
  const token = localStorage.getItem("token");

  const res = await baseApi.get(`api/v1/users/summary`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
  return res.data;
}
