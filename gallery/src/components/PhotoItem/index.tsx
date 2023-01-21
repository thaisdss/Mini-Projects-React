import * as C from "./styles";

type Props = {
    url: string;
    name: string;
    onDelete: (name: string) => void;
}

export function PhotoItem({ url, name, onDelete }: Props) {
    return(
        <C.Container>
            <img src={url} alt={name} />
            {name}
            <button onClick={() => onDelete(name)}>Excluir</button>
        </C.Container>
    );
}