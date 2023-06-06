import * as C from "./style";
import { TodoTask } from "../../types/TodoTask";
import Button from "../Button";

type Props = {
    todo: TodoTask;
    removeTodo: (id: number) => void;
    completeTodo: (id: number) => void;
}

export default function Todo({todo, removeTodo, completeTodo} : Props) {
    const buttons = [
        {
            text: "Completar",
            color: "#5cb85c",
            action: "complete"
        },
        {
            text: "X",
            color: "#d9534f",
            action: "remove",
        }
    ]

    function handleButtons(action: string) {
        if(action == "remove") removeTodo(todo.id);

        if(action == "complete") completeTodo(todo.id);
    }

    return(
        <C.Container isCompleted={todo.isCompleted}>
            <C.Content>
                <p>{todo.text}</p>
                <C.Category>({todo.category})</C.Category>
            </C.Content>
            <div>
             {buttons.map((button) => (
             <Button
             key={button.text}
             text={button.text} 
             type="button" 
             color={button.color}
             handleButtons={handleButtons}
             action={button.action}
             />
             ))}
            </div>
        </C.Container>
    );
}