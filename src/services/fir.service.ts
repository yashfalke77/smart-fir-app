import apiService from './api.service';

const apiUrl = '/fir';

export default {
  getAllFirs: () => apiService.get(apiUrl),

  newFir: (data: any) => apiService.post(apiUrl, data),

  updateFir: (data:any, id:any) => apiService.patch(`${apiUrl}/${id}`, data),

  getFirByUser: async (id: string | undefined) => apiService.get(`${apiUrl}/user/${id}`),

  getFirByPoliceStation: async (id: string | undefined) => apiService.get(`${apiUrl}/station/${id}`),

};
