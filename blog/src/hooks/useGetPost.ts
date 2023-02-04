import { useState, useEffect } from "react";
import { api } from "../services/api";
import { Post } from "../types/Post";

export function useGetPost(url: string) {
    const [post, setPost] = useState<Post | null>(null);

    async function getPost() {
        try{
            const response = await api.get(url);
            const data = response.data;

            setPost(data)
        }
        catch(err) { console.log(err) }
    }

    useEffect(() => {
        getPost()
    }, [])

    return post;
}