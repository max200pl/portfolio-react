// https://tkdodo.eu/blog/mastering-mutations-in-react-query
// https://majidlotfinia.medium.com/react-query-best-practices-separating-concerns-with-custom-hooks-3f1bc9051fa2

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios"


export function useWorks(filter) {
    return useQuery({
        queryKey: ["works", [filter.category]],
        queryFn: async () => {
            try {
                const { data } = await axios.get(
                    `http://localhost:8000/works`,
                    { params: { category: filter.category } }
                )
                console.log("Success load works");
                return data
            } catch (error) {
                console.log(`Error loading works ${error.message}`);
            }
        }
    })
}

const createWork = async (work) => {
    const config = {
        headers: {
            "content-type": "multipart/form-data"
        }
    };

    const { data } = await axios.post(
        `http://localhost:8000/work/create`,
        work,
        config
    )

    return data
};

export const useCreateWork = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (work) => createWork(work),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["works"]
            })
        },
        onError: (error) => {
            console.error(error.message);
        },
    });
};

export function useCategoriesWorks() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:8000/works/categories"
                )

                console.log(`Success load categories works`);
                return data;
            } catch (error) {
                console.log(`Error loading categories ${error.message}`);
            }
        }
    })
}