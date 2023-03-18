import apiService from './api.service'

const apiUrl = '/user'

export default {
  registerUser: async (userData: any) => {
    return await apiService.post(`${apiUrl}/register`, userData)
  },

  loginUser: async (userData: any) => {
    return await apiService.post(`${apiUrl}/login`, userData)
  },

  getAllUser: async () => {
    return await apiService.get(apiUrl)
  }
}
