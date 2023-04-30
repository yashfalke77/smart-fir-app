import apiService from './api.service';

const apiUrl = '/station';

export default {
  getAllPoliceStation: () => apiService.get(apiUrl),

  getPoliceStationById: async (id: string | undefined) => apiService.get(`${apiUrl}/${id}`),

  newPoliceStation: (data: any) => apiService.post(apiUrl, data),
};
