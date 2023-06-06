import Button from "../Button";
import * as C from "./style";
import { FormEvent, useState } from "react";

type Props = {
    addTodo: (text: string, category: string) => void;
}

export default function TodoForm({addTodo} : Props) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if(!title || !category) return;

        addTodo(title, category);

        setTitle("");
        setCategory("");
    }

    return(
        <C.Container>
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Digite o título"
                value={title}
                onChange={(event) => {setTitle(event.target.value)}}
                />
                <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <Button text="Criar Tarefa" type="submit" color="#333974"/>
            </form>
        </C.Container>
    );
}