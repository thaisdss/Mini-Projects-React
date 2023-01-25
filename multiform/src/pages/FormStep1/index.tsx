import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { ChangeEvent, useEffect, KeyboardEvent} from "react";

export function FormStep1() {
    const navigate = useNavigate();

    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1,
        })
    }, [])

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {   
        dispatch({
            type: FormActions.setName,
            payload: e.target.value,
        });
    }

    const handleNextStep = () => {
        if(state.name != "" && state.name.length >= 3) {
            navigate("/step2")
        }else{
            alert("Dados não preenchidos ou inválidos!")
        }
    }

    const verifyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.code === "Enter") handleNextStep();
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input 
                    type="text" 
                    autoFocus 
                    value={state.name}
                    onChange={handleNameChange}
                    onKeyDown={verifyEnter}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}