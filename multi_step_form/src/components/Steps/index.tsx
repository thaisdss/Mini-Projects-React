import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import * as C from "./styles";

type Props = {
    currentStep: number;
}

export function Steps({ currentStep }: Props) {
    return(
        <C.Container>
            <C.Step active={ true }>
                <AiOutlineUser />
                <p>Identificação</p>
            </C.Step>
            <C.Step active={ currentStep >= 1 ? true : false }>
                <AiOutlineStar />
                <p>Avaliação</p>
            </C.Step>
            <C.Step active={ currentStep >= 2 ? true : false }>
                <FiSend />
                <p>Enviar</p>
            </C.Step>
        </C.Container>
    );
}