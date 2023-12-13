import { useQuery } from "@tanstack/react-query";
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