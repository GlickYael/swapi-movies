import axios from "axios";
import { useQuery, } from '@tanstack/react-query';


export interface Movie {
    title: string;
    release_date: string;
    episode_id: number;
}

export const useMovies = () => {
    return useQuery<Movie[], Error>({
        queryKey: ["movies"],
        queryFn: async()=>{
                const response = await axios.get("https://swapi.py4e.com/api/films/");
                return response.data.results;
        },
        retry: 1, // Only retry once if the query fails
    });
};

