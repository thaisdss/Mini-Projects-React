import * as C from "./styles";
import { Link } from "react-router-dom";
import { useGetPosts } from "../../hooks/useGetPosts";

export function Home() {
    const posts = useGetPosts("/posts");

    return(
        <C.Container>
            <h1>Últimos posts</h1>
            {posts.length === 0 ? <p>Carregando...</p> : (
                posts.map(post => (
                    <C.Post key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
                    </C.Post>
                ))
            )}
        </C.Container>
    );
}