import axios from "axios";
import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import config from "../../config.json"
import setupInterceptorsTo from "../utils/axiosSetup";

axios.defaults.baseURL = config.prodEndpoint;

setupInterceptorsTo(axios)

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
}

