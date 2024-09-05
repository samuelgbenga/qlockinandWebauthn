import { baseApi } from "./base";

export async function changePassword(userData, options = {}) {
  const token = localStorage.getItem("token");

  const res = await baseApi.post("api/auth/change-password", userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options, // Spread other options if any
  });
  return res.data;
}
