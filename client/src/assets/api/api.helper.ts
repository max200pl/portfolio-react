import axios from "axios";

export interface BaseQueryOptions {
    url: string;
    params?: Record<string, any>;
    contentType?: string;
    body?: FormData | object | string;
    method?: "get" | "post" | "put" | "delete";
    headers_param?: object;
    credentials?: "include" | "omit" | "same-origin";
}

export const baseQuery = (options: BaseQueryOptions) => {
    const { url, params, contentType, headers_param, body, method, credentials } = options;

    const headers: Record<string, string> = {
        ...(contentType && { "Content-Type": contentType }),
        ...headers_param,
    };

    return axios({
        url,
        method,
        data: body,
        params,
        headers,
        withCredentials: credentials === "include" ? true : false,
    }).then((response) => response.data);
};
