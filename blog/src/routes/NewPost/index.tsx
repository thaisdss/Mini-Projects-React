import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

export function NewPost() {
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>();
    const [body, setBody] = useState<string>();

    async function createPost(e: FormEvent) {
        e.preventDefault();
        let message: string = "";

        try{
            const post = { title, body, userId: 1 }

            await api.post("/posts", {
                body: post,
            })

            message =  "Post criado com sucesso!";
        }
        catch(err) { 
           console.log(err);
           message = "Infelizmente ocorreu um erro e não foi possível criar o post. Tente novamente mais tarde!";
        }

        alert(message);
        navigate("/");
    }

    return(
        <C.Container>
            <h2>Inserir um novo post:</h2>
            <C.Form onSubmit={(e) => createPost(e)}>
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
                <input type="submit" value="Criar Post" className="btn" />
            </C.Form>
        </C.Container>
    );
}