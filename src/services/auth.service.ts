import apiService from "./api.service";

const apiUrl = '/user'

export default {
    registerUser: (userData: any) => {
        return apiService.post(`${apiUrl}/register`, userData)
    }
}