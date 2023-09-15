import {$base} from "@/http";
import jwtDecode from "jwt-decode";

export const login = async (email:string, password: string) => {
     const {data} = await $base.post('api/user/login', {email: email, password: password});

     localStorage.setItem('token', data.token);

     return jwtDecode(data.token)
}

export const registration = async (email:string, password: string) => {
     const {data} = await $base.post('api/user/registration', {email: email, password: password, role: 'ADMIN'});

     localStorage.setItem('token', data.token);

     return jwtDecode(data.token)
}