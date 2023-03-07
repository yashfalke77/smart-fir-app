import { Fir } from "../models/fir.model";
import apiService from "./api.service";

const apiUrl = '/fir'

export default {
    getAllFirs: async() => {
        return await apiService.get<Fir[]>('/fir')
    }
}