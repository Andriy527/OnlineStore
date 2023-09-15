import axios from "axios";


const $base = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

export default $base;