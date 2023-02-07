import * as C from "./styles";
import { BsSearch } from "react-icons/bs";
import { KeyboardEvent, useState } from "react";

type Props = {
    loadUser: (userName: string) => Promise<void>;
}

export function Search({ loadUser }: Props) {
    const [userName, setUserName] = useState<string>("");

    function handleKeyDown(e: KeyboardEvent) {
        if(e.key === "Enter") loadUser(userName);
    };

    return(
        <C.Container>
            <h2>Busque por um usuário:</h2>
            <p>Conheça os melhores repositórios</p>

            <C.Search_Container>
                <input 
                type="text" 
                placeholder="Digite o nome do usuário"
                onChange={e => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </C.Search_Container>
        </C.Container>
    );
}