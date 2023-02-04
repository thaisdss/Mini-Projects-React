import { FormEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { useGetPost } from "../../hooks/useGetPost";
import { api } from "../../services/api";
import * as C from "./styles";

export function EditPost() {
    const {id} = useParams();
    const navigate = useNavigate();
    const post = useGetPost(`/posts/${id}`)

    const [title, setTitle] = useState<string>();
    const [body, setBody] = useState<string>();

    async function editPost(e: FormEvent) {
        e.preventDefault();

        let message: string = "";

        try{
            const post = { title, body }

            await api.patch(`/posts/${id}`, {
                body: post,
            })

            message =  "Post editado com sucesso!";
        }
        catch(err) { 
           console.log(err);
           message = "Infelizmente ocorreu um erro e não foi possível editar o post. Tente novamente mais tarde!";
        }

        alert(message);
        navigate("/");
    }

    useEffect(() => {
        const inputTitle = document.getElementById("title") as HTMLInputElement;
        const inputBody = document.getElementById("body") as HTMLTextAreaElement;

        inputTitle.value = `${post?.title}`;
        inputBody.value = `${post?.body}`;
    }, [])

    return(
        <C.Container>
            <h2>Editando: {post?.title}</h2>
            <C.Form onSubmit={(e) => editPost(e)}>
                <C.FormControl>
                        <label htmlFor="title">Título:</label>
                        <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        placeholder="Digite o título"
                        onChange={(e) => setTitle(e.target.value)}
                        />
                </C.FormControl>
                <C.FormControl>
                        <label htmlFor="body">Conteúdo:</label>
                        <textarea 
                        name="body" 
                        id="body" 
                        placeholder="Digite o conteúdo"
                        onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                </C.FormControl>
                <input type="submit" value="Editar Post" className="btn" />
            </C.Form>
        </C.Container>
    );
}