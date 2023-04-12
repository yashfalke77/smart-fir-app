import apiService from './api.service';

const apiUrl = '/fir';

export default {
  getAllFirs: () => apiService.get(apiUrl),

  newFir: (data: any) => apiService.post(apiUrl, data),
};
