import { baseApi } from "./base";


export async function register( userData, options = {}) {
    const res = await baseApi.post(`api/auth/register`, userData, options);
    return res.data;
}