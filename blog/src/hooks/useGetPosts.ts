import { useState, useEffect } from "react";
import { api } from "../services/api";
import { Post } from "../types/Post";

export function useGetPosts(url: string) {
    const [posts, setPosts] = useState<Post[]>([]);

    async function getPosts() {
        try{
            const response = await api.get(url);
            const data = response.data;

            setPosts(data)
        }
        catch(err) { console.log(err) }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return posts;
}