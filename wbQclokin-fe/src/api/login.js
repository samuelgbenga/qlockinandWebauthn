import { baseApi } from "./base";


export async function login( userData, options) {
    const res = await baseApi.post(`api/auth/login`, userData, options);
    return res.data;
}