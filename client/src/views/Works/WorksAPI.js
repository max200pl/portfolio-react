import { useQuery } from "@tanstack/react-query";
import axios from "axios"

export function useWorks() {
    return useQuery({
        queryKey: ["works"],
        queryFn: async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:8000/works"
                )
                console.log("Success load works");
                return data
            } catch (error) {
                console.log(`Error loading works ${error.message}`);
            }
        }
    })
}