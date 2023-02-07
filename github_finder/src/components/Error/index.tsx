import * as C from "./styles";

type Props = {
    msg: string;
}

export function Error({ msg }: Props) {
    return(
        <C.Container>
            <p>{msg}</p>
        </C.Container>
    );
}