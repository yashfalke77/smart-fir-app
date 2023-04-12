import apiService from './api.service';

const apiUrl = '/user';

export default {
  registerUser: async (userData: any) => apiService.post(`${apiUrl}/register`, userData),

  loginUser: async (userData: any) => apiService.post(`${apiUrl}/login`, userData),

  getAllUser: async () => apiService.get(apiUrl),

  getUserById: async (id: string | undefined) => apiService.get(`${apiUrl}/${id}`),

  deleteUser: async (id: string | undefined) => apiService.delete(`${apiUrl}/${id}`),
};
