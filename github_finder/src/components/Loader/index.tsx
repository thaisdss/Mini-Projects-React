import * as C from "./styles";

type Props = {
    isLoading: boolean;
}

export function Loader({ isLoading = false }: Props) {
    return(
        <C.Container isLoading={isLoading}></C.Container>
    );
}