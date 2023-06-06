import * as C from "./style";
import { Dispatch, SetStateAction } from 'react';

type Props = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

export default function Search({search, setSearch} : Props) {
    return(
        <C.Container>
            <h2>Pesquisar</h2>
            <input 
            type="text" 
            value={search}
            placeholder="Digite para pesquisar..."
            onChange={(event) => setSearch(event.target.value)} 
            />
        </C.Container>
    );
}