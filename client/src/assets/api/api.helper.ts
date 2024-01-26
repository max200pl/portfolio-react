import axios from "axios";

export interface BaseQueryOptions {
    url: string;
    params?: Record<string, any>;
    contentType?: string;
    body?: FormData | object;
    method?: "get" | "post" | "put" | "delete";
    headers_param?: object;
}

export const baseQuery = (options: BaseQueryOptions) => {
    const { url, params, contentType, headers_param, body, method } = options;

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
    }).then((response) => response.data);
};
