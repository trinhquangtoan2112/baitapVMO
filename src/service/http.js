import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
class SetUpAxios {
    constructor() {
        this.axiosCreate = axios.create({
            baseURL: API_URL,
            timeout: 60000
        });
    }
    get = async (url, params) => {
        const updatedParams = await { ...params, 'api-key': API_KEY };
        return this.axiosCreate.get(url, {
            params: updatedParams
        })
    }
    post = async (url, params) => {
        const updatedParams = await { ...params, 'api-key': API_KEY };
        return this.axiosCreate.post(url, {
            params: updatedParams
        })
    }
    delete = async (url, params) => {
        const updatedParams = await { ...params, 'api-key': API_KEY };
        return this.axiosCreate.delete(url, {
            params: updatedParams
        })
    }
    put = async (url, params) => {
        const updatedParams = await { ...params, 'api-key': API_KEY };
        return this.axiosCreate.put(url, {
            params: updatedParams
        })
    }
}


export const apiKey = new SetUpAxios();