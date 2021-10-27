import { axiosInstance } from "./instance";
import jwtDecode from "jwt-decode";

export function logout() {
    try {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
    } catch (error) {
        throw error;
    }
};


export async function authenticate(credentials) {
    try {
        const response = await axiosInstance.post('api/token/obtain/', credentials);
        axiosInstance.defaults.headers['Authorization'] = "Bearer " + response.data.access;
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        return response;
    } catch(error) {
        throw error;
    }
};


export function getIsAuthenticated() {
    // Voir s'il y a un Token
    const token = localStorage.getItem("access_token");
    // Si le token est encore valide
    if (token) {
        const { exp: expiration } = jwtDecode(token);
        if (expiration * 5000 > new Date().getTime()) {
            return true
        }

        return false;
    }

    return false;

};