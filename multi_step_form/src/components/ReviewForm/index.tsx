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
    updateFieldHandler: (key: string, value: string) => void;
}

export function ReviewForm({ data, updateFieldHandler }: Props) {
    return(
        <C.Container>
            <C.FormControlRadio>
                <C.RadioContainer>
                    <input 
                    type="radio" 
                    name="review" 
                    value="unsatisfied"
                    checked={data.review === "unsatisfied"}
                    required 
                    onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </C.RadioContainer>

                <C.RadioContainer>
                    <input 
                    type="radio" 
                    name="review" 
                    value="neutral"
                    checked={data.review === "neutral"}
                    required
                    onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </C.RadioContainer>

                <C.RadioContainer>
                    <input 
                    type="radio" 
                    name="review" 
                    value="satisfied"
                    checked={data.review === "satisfied"}
                    required
                    onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiSmileFill />
                    <p>Satifeito</p>
                </C.RadioContainer>

                <C.RadioContainer>
                    <input 
                    type="radio" 
                    name="review" 
                    value="very_satisfied"
                    checked={data.review === "very_satisfied"}
                    required
                    onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito satisfeito</p>
                </C.RadioContainer>
            </C.FormControlRadio>
            <C.FormControl>
                <label htmlFor="comment">Comentário:</label>
                <textarea 
                name="comment" 
                id="comment" 
                placeholder="Comente como foi a sua experiência com o produto..."
                value={data.comment}
                required
                onChange={(e) => updateFieldHandler("comment", e.target.value)}
                ></textarea>
            </C.FormControl>
        </C.Container>
    );
}