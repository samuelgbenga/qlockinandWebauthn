import { baseApi } from "./base";


export async function forgetPassword( userData, options) {
    const res = await baseApi.post(`api/auth/forget-password`, userData, options);
    return res.data;
}