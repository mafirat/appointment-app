import Axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { BaseRestUrls } from "../stores/Urls";

type methodType = "GET" | "POST" | "DELETE" | "PUT";

export class RestDataSource {
    dataType: string;
    baseUrl: string;
    axiosInstance: AxiosInstance;
    headers = {
        "Authorization": "",
        "Access-Control-Allow-Origin": "*"
    };
    constructor(dataType: string) {
        this.dataType = dataType;
        this.baseUrl = BaseRestUrls[this.dataType];
        this.axiosInstance = Axios.create();
        this.axiosInstance.interceptors.response.use(
            response => this.successHandler(response),
            error => this.errorHandler(error)
        );
    }

    successHandler = (response: AxiosResponse) => {
        // TO DO: success handle
        return response
    }

    errorHandler = (error: AxiosError) => {
        // TO DO: error handler
        return Promise.reject(error)
    }
    SetData = (params: any, token: string, data: any) =>
        this.SendRequest("POST", this.baseUrl, params, token, data)
    GetData = (params: any, token: string) =>
        this.SendRequest("GET", this.baseUrl, params, token)
    SendRequest = (method: methodType, url: string, params: any, token: string, data?: any) => {
        this.headers.Authorization = `Bearer ${token}`;

        return this.axiosInstance.request({ method, url, headers: this.headers, params, data, timeout: 10000 })
    }
}