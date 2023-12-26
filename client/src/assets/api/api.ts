// https://tkdodo.eu/blog/mastering-mutations-in-react-query
// https://majidlotfinia.medium.com/react-query-best-practices-separating-concerns-with-custom-hooks-3f1bc9051fa2

import {
    InvalidateQueryFilters,
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { fillFormData } from "../helpers/helpers";
import {
    InterfaceTechnologies,
} from "../interfaces/interfaces";
import { IWork } from "../interfaces/interfaces";

const API_BASE_URL = "http://localhost:8000/works";

export type ActionType = "update" | "create" | "delete";

enum Tag {
    WORKS = "works",
    CATEGORIES = "categories",
    TECHNOLOGIES = "technologies",
}

interface BaseQueryOptions {
    url: string;
    params?: Record<string, any>;
    contentType?: string;
    body?: FormData;
    method?: "get" | "post" | "put" | "delete";
}


const baseQuery = (options: BaseQueryOptions) => {
    const { url, params, contentType, body, method } = options;

    const headers: Record<string, string> = {
        ...(contentType && { "Content-Type": contentType }),
    };

    return axios({
        url,
        method,
        data: body,
        params,
        headers,
    }).then((response) => response.data);
};

export const useGetWorksQuery = (filter: { category: string }) => {
    const baseQueryFn = baseQuery;

    const url = `${API_BASE_URL}`;
    const params = { ...filter };

    return useQuery<IWork[], Error>({
        queryKey: [Tag.WORKS, Tag.CATEGORIES, filter.category],
        queryFn: () =>
            baseQueryFn({
                url,
                params,
            }),
    });
};


export interface SaveWork extends Omit<IWork, "cardImage"> {
    image: File | undefined;
}

const saveWork = async ({ work, actionType, method }: { work: SaveWork | Partial<SaveWork>, actionType: ActionType, method: BaseQueryOptions["method"] }): Promise<IWork> => {
    try {
        const url = `${API_BASE_URL}/${actionType}`;
        const contentType = "multipart/form-data";

        const formData = new FormData();

        fillFormData(formData, work);

        if (work.image !== undefined) {
            if (work.image && work.image instanceof File) {
                formData.append("image", work.image);
            } else {
                throw new Error("Invalid image data");
            }
        }

        const result = await baseQuery({
            url,
            contentType,
            method,
            body: formData,
        });

        return result as IWork;
    } catch (error) {
        console.error("Error creating work:", error);
        throw error;
    }
};

export const useCreateWorkMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<IWork, Error, SaveWork, unknown>({
        mutationFn: (work) => saveWork({ work, actionType: "create", method: "post" }),
        onSuccess: () => {
            queryClient.invalidateQueries([Tag.WORKS] as InvalidateQueryFilters);
        },
        onError: (error) => {
            console.error(error.message);
        },
    });
};

export const useUpdateWorkMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<IWork, Error, Partial<SaveWork>, unknown>({
        mutationFn: (work: Partial<SaveWork>) => saveWork({ work, actionType: "update", method: "put" }),
        onSuccess: () => {
            queryClient.invalidateQueries([Tag.WORKS] as InvalidateQueryFilters);
        },
        onError: (error) => {
            console.error(error.message);
        },
    });
};

export function useGetCategoriesQuery() {
    const baseQueryFn = baseQuery;
    const url = `${API_BASE_URL}/categories`;

    return useQuery<IWork[], Error>({
        queryKey: [Tag.CATEGORIES],
        queryFn: () =>
            baseQueryFn({
                url,
            }),
    });
}

export function useGetTechnologiesQuery() {
    const baseQueryFn = baseQuery;
    const url = `${API_BASE_URL}/technologies`;

    return useQuery<InterfaceTechnologies, Error>({
        queryKey: [Tag.TECHNOLOGIES],
        queryFn: () =>
            baseQueryFn({
                url,
            }),
    });
}

/* const fetchInitializeApp = async () => {

};

const useInitializeAppQuery = () => {
    const queryClient = useQueryClient();

    return useQuery({
        queryKey: 'initializeApp',
        queryFn: fetchInitializeApp,
        onSuccess: (data) => {
            queryClient.setQueryData('initializeApp', data);
        },
    });
}; */
