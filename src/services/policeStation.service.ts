import apiService from './api.service';

const apiUrl = '/station';

export default {
  getAllPoliceStation: () => apiService.get(apiUrl),

  newPoliceStation: (data: any) => apiService.post(apiUrl, data),
};
