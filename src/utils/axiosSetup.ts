import {
  type AxiosError, type AxiosInstance, type InternalAxiosRequestConfig, type AxiosResponse,
} from 'axios';
import { type ResponseError } from '../models/response.model';
/* eslint-disable no-console */

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  console.info(`[request] [${JSON.stringify(config)}]`);
  return config;
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = async (error: AxiosError<ResponseError>): Promise<AxiosError> => {
  const expectedError = (error.response != null) && error.response.status >= 400 && error.response.status < 500;

  // show toast an unexpected error occured when there is any issue of statuscode 500
  if (expectedError) {
    console.log(expectedError);
    // toast.error(error.response?.data.meta.message, {
    //   toastId: 'api-error-toast',
    //   position: 'bottom-center',
    //   autoClose: 2000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: 'dark',
    // });
  }

  console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

export default function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
