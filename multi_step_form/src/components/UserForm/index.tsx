import { Form } from "../../types/Form";
import * as C from "./styles";

type Props = {
    data: Form;
    updateFieldHandler: (key: string, value: string) => void;
}

export function UserForm({ data, updateFieldHandler }: Props) {
    return(
        <C.Container>
            <C.FormControl>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Digite seu nome" 
                value={data.name || ""} 
                required
                onChange={(e) => updateFieldHandler("name", e.target.value)}
                />
            </C.FormControl>
            <C.FormControl>            
                <label htmlFor="email">E-mail:</label>
                <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Digite seu e-mail" 
                value={data.email || ""} 
                required
                onChange={(e) => updateFieldHandler("email", e.target.value)}
                />
            </C.FormControl>
        </C.Container>
    );
}