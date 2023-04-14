import axios from "axios";

export const TOKEN: string = "TOKEN"
export const BASE_URL: string = "https://"

export const http_no_auth = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        ContentType: "application/x-www-form-urlencoded"
    }
})

export const http_auth = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        ContentType: "application/json",
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`
    }
})
