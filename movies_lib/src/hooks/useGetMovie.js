import axios from "axios";
import { useState, useEffect } from "react";

export function useGetMovie(url) {
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const data = await axios.get(url);

        setMovie(data.data);
    }

    useEffect(() => {
        getMovie()
    }, [])

    return movie;
}