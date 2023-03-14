import * as C from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

export function Option({ option, answer, selectedOption }) {
    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <C.Container
        className={`
        ${quizState.answerSelected && option === answer ? "correct" : ""}
        ${quizState.answerSelected && option !== answer ? "wrong" : ""}
        `}
        onClick={() => selectedOption()}
        >
            <p>{option}</p>
        </C.Container>
    );
}