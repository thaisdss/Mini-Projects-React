import * as C from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { Option } from "../Option";

export function Question() {
    const [quizState, dispatch] = useContext(QuizContext);

    const currentQuestion = quizState.questions[quizState.currentQuestion];

    function onSelectedOption(option) {
        dispatch({
            type: "CHECK_ANSWER",
            payload: {answer: currentQuestion.answer, option},
        })
    }

    return(
        <C.Container>
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length} </p>
            <h2>{currentQuestion.question}</h2>
            <C.Options_Container>
                { currentQuestion.options.map((option) => (
                    <Option 
                    key={option} 
                    option={option} 
                    answer={currentQuestion.answer} 
                    selectedOption={() => onSelectedOption(option)}
                    />
                )) }
            </C.Options_Container>
            {quizState.answerSelected && (
                <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
            )}
        </C.Container>
    );
}