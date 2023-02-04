import { useGetPosts } from "../../hooks/useGetPosts";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import * as C from "./styles";
import { useState } from "react"

export function Manage() {
    const navigate = useNavigate();
    const posts = useGetPosts("/posts");

    function handleEditPost(id: number) {
        navigate(`/posts/edit/${id}`)
    }

    async function handleDeletePost(id: number) {
        if(confirm("Você realmente deseja excluir esse post?")) {
            try{
                await api.delete(`/posts/${id}`);

                alert("Post excluído com sucesso!");

                const element = document.getElementById(`${id}`) as HTMLElement;
                element.style.display = "none";
                
                
            }
            catch(err) { console.log(err) }
        }
    }

    return(
        <C.Container>
            <h1>Gerenciar Posts</h1>
            {posts.length === 0 ? <p>Carregando...</p> : (
                posts.map(post => (
                    <C.Post key={post.id} id={`${post.id}`}>
                        <h2>{post.title}</h2>
                        <div>
                            <C.Button color="blue" onClick={() => handleEditPost(post.id)}>
                                Editar
                            </C.Button>
                            <C.Button color="red" onClick={() => handleDeletePost(post.id)}>
                                Excluir
                            </C.Button>
                        </div>
                    </C.Post>
                ))
            )}
        </C.Container>
    );
}