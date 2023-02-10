import { 
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from "react-icons/bs";
import { Form } from "../../types/Form";
import * as C from "./styles";

type Props = {
    data: Form;
}

export function Thanks({ data }: Props) {
    const emojiData = {
        unsatisfied: <BsFillEmojiFrownFill />,
        neutral: <BsFillEmojiNeutralFill />,
        satisfied: <BsFillEmojiSmileFill />,
        very_satisfied: <BsFillEmojiHeartEyesFill />
    }

    return(
        <C.Container>
            <h2>Falta pouco...</h2>
            <p>
                A sua opnião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.
            </p>
            <p>
                Para concluir a avaliação clique no botão Enviar abaixo.
            </p>
            <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
            <C.ReviewData>
                <span>Satisfação com o produto:</span>
                { emojiData[data.review] }
            </C.ReviewData>
            <C.ReviewData>
                <span>Comentário: </span>
                {data.comment}
            </C.ReviewData>
        </C.Container>
    );
}