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
    DeleteData = (params: any, token: string, id: number | string) =>
        this.SendRequest("DELETE", `${this.baseUrl}/${id}`, params, token)
    UpdateData = (params: any, token: string, data: any, id?: number) =>
        this.SendRequest("PUT", `${this.baseUrl}/${id ? id : data.id}`, params, token, data)
    SetData = (params: any, token: string, data: any) =>
        this.SendRequest("POST", this.baseUrl, params, token, data)
    GetData = (params: any, token: string) =>
        this.SendRequest("GET", this.baseUrl, params, token)
    SendRequest = (method: methodType, url: string, params: any, token: string, data?: any) => {
        this.headers.Authorization = `Bearer ${token}`;

        return this.axiosInstance.request({ method, url, headers: this.headers, params, data, timeout: 10000 })
    }
}