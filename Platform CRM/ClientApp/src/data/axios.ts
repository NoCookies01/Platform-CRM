import axios from "axios";

export function get<T>(url: string) {
    return axios.get<T>(url);
}

export function post<T>(url: string, data: any) {
    return axios.post<T>(url, data);
}

export function remove<T>(url: string) {
    return axios.delete<T>(url);
}

export function patch<T>(url: string, data: any) {
    return axios.patch<T>(url, data);
}