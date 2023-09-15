import axios, {AxiosInterceptorOptions} from "axios";

const $auth = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

const authConfig = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

$auth.interceptors.request.use(authConfig);

export default $auth;