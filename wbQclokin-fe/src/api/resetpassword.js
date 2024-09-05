import { baseApi } from "./base";


export async function resetPassword( userData, options) {
    const res = await baseApi.post(`api/auth/reset`, userData, options);
    return res.data;
}