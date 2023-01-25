import { useNavigate, Link } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export function FormStep2() {
    const navigate = useNavigate();

    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === "") navigate("/")

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2,
        })
    }, [])

    const handleNextStep = () => navigate("/step3");

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        })
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual profissionalmente.</p>

                <hr />

                <SelectOption 
                title="Sou iniciante"
                description="Comecei a programar a menos de dois anos."
                icon="🥳"
                selected={state.level === 0}
                onClick={() => {setLevel(0)}}
                />

                <SelectOption 
                title="Sou programador"
                description="Já programo a dois anos ou mais."
                icon="😎"
                selected={state.level === 1}
                onClick={() => {setLevel(1)}}
                />

                <Link to={"/"} className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}