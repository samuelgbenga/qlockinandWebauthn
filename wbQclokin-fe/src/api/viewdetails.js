import { baseApi } from "./base";

export async function userDetails(options = {}) {
  const token = localStorage.getItem("token");

  const res = await baseApi.get(`api/v1/users/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
  return res.data;
}
