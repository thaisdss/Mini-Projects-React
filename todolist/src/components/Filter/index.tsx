import Button from "../Button";
import * as C from "./style";
import { Dispatch, SetStateAction } from 'react';

type Props = {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
    setSort: Dispatch<SetStateAction<string>>;
}

export default function Filter({ filter, setFilter, setSort }: Props) {
    const buttons = ["Asc", "Desc"]

    function handleButtons(action: string) {
        action === "Asc" ? setSort("Asc") : setSort("Desc");
    }

    return(
        <C.Container>
            <h2>Filtrar</h2>
            <C.FilterOptions>
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética:</p>
                    {buttons.map((text) => (
                        <Button 
                        key={text} 
                        text={text} 
                        type="button" 
                        color="#333974" 
                        handleButtons={handleButtons} 
                        action={text} 
                        />
                    ))}
                </div>
            </C.FilterOptions>
        </C.Container>
    );
}