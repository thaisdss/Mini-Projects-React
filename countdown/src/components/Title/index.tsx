import * as C from "./styles";

type Props = {
    title: string;
}

export function Title({title}: Props) {
    return(
        <C.Title>{title}</C.Title>
    )
}