import { baseApi } from "./base";

export async function getAttendanceReport(options = {}) {
  const token = localStorage.getItem("token");

  const res = await baseApi.get(`api/v1/users/attendance`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
  return res.data;
}

export async function getAbsenteeismReport(options = {}) {
  const token = localStorage.getItem("token");

  const res = await baseApi.get(`api/v1/users/absenteeism`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
  return res.data;
}

export async function getLateComerReport(options = {}) {
  const token = localStorage.getItem("token");

  const res = await baseApi.get(`api/v1/users/lateComer`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
  return res.data;
}

export async function getOverTimeReport(options = {}) {
  const token = localStorage.getItem("token");

  const res = await baseApi.get(`api/v1/users/overtime`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
  return res.data;
}
