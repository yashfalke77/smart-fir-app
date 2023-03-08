import apiService from "./api.service";

const apiUrl = '/user'

export default {
    registerUser: (userData: any) => {
        return apiService.post(`${apiUrl}/register`, userData)
    },

    loginUser: (userData: any) => {
        return apiService.post(`${apiUrl}/login`, userData)
    }
}