// https://tkdodo.eu/blog/mastering-mutations-in-react-query
// https://majidlotfinia.medium.com/react-query-best-practices-separating-concerns-with-custom-hooks-3f1bc9051fa2

import {
    InvalidateQueryFilters,
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import { fillFormData } from "../helpers/helpers";
import {
    InterfaceTechnologies,
} from "../interfaces/interfaces";
import { IWork } from "../interfaces/interfaces";
import { baseQuery, BaseQueryOptions } from "./api.helper";

const WORKS_API_BASE_URL = "works";

export type TypeActionForm = "update" | "create" | "delete";

enum Tag {
    WORKS = "works",
    CATEGORIES = "categories",
    TECHNOLOGIES = "technologies",
}

export const useGetWorksQuery = (filter: { category: string }) => {
    const baseQueryFn = baseQuery;

    const url = `${WORKS_API_BASE_URL}`;
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

const deleteWork = async ({ workId, typeActionForm, method }: { workId: IWork["_id"], typeActionForm: TypeActionForm, method: BaseQueryOptions["method"] }): Promise<IWork["_id"]> => {
    try {
        const url = `${WORKS_API_BASE_URL}/${typeActionForm}`;

        console.log("workId", workId);

        const result = await baseQuery({
            url,
            method,
            params: { id: workId },
        });

        return result as IWork["_id"];
    } catch (error) {
        console.error("Error deleting work:", error);
        throw error;
    }
};

export const useDeleteWorkMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<IWork["_id"], Error, IWork["_id"]>({
        mutationFn: (workId) => deleteWork({ workId, typeActionForm: "delete", method: "delete" }),
        onSuccess: () => {
            queryClient.invalidateQueries([Tag.WORKS] as InvalidateQueryFilters);
        },
        onError: (error) => {
            console.error(error.message);
        },
    });
};

const saveWork = async ({ work, typeActionForm, method }: { work: SaveWork | Partial<SaveWork>, typeActionForm: TypeActionForm, method: BaseQueryOptions["method"] }): Promise<IWork> => {
    try {
        const url = `${WORKS_API_BASE_URL}/${typeActionForm}`;
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
        mutationFn: (work) => saveWork({ work, typeActionForm: "create", method: "post" }),
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
        mutationFn: (work: Partial<SaveWork>) => saveWork({ work, typeActionForm: "update", method: "put" }),
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
    const url = `${WORKS_API_BASE_URL}/categories`;

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
    const url = `${WORKS_API_BASE_URL}/technologies`;

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
