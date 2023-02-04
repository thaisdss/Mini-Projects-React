import { useState, useEffect } from "react";
import { api } from "../services/api";
import { Comment } from "../types/Comment";

export function useGetComments(url: string) {
    const [comments, setComments] = useState<Comment[]>([]);

    async function getComments() {
        try{
            const response = await api.get(url);
            const data = response.data;

            setComments(data)
        }
        catch(err) { console.log(err) }
    }

    useEffect(() => {
        getComments()
    }, [])

    return comments;
}