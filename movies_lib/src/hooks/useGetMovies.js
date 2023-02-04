import axios from "axios";
import { useState, useEffect } from "react";

export function useGetMovies(url) {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState();

    const getMovies = async () => {
        try{
            const data = await axios.get(url);

            setMovies(data.data.results)
            setTotalPages(data.data.total_pages)
        }
        catch(err) { console.log(err) }
    }

    useEffect(() => {
        getMovies()
    }, [url])

    return { movies, totalPages };
}