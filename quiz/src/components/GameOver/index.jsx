import * as C from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import WellDone from "../../../public/assets/images/welldone.svg";

export function GameOver() {
    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <C.Container>
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
            <img src={WellDone} alt="Fim do Quiz" />
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </C.Container>
    );
}