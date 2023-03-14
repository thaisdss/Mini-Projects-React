import * as C from "./styles";
import Quiz from "../../../public/assets/images/quiz.svg";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

export function Welcome() {
    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <C.Container>
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
            <img src={Quiz} alt="Inicio do Quiz" />
        </C.Container>
    );
}