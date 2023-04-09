import axios from 'axios';
import config from '../../api.config.json';
import setupInterceptorsTo from '../utils/axiosSetup';
import localStorageService from './localStorage.service';

axios.defaults.baseURL = config.devEndpoint;

const setJWTHeaders = (): void => {
  axios.defaults.headers.common['x-auth-token'] = localStorageService.getJwt();
};

setupInterceptorsTo(axios);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setJWTHeaders,
};
