import axios from "axios";
import { useState } from "react";

export function useGetMovies(url) {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const data = await axios.get(url);

        setMovies(data.data.results);
    }

    getMovies()

    return movies;
}