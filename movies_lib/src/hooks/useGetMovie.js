import axios from "axios";
import { useState, useEffect } from "react";

export function useGetMovie(url) {
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        try{
            const data = await axios.get(url);

            setMovie(data.data);
        }
        catch(err) { console.log(err) }
    }

    useEffect(() => {
        getMovie()
    }, [])

    return movie;
}