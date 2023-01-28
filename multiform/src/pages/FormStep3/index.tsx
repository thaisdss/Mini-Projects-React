import { useNavigate, Link } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { ChangeEvent, useEffect, KeyboardEvent} from "react";

export function FormStep3() {
    const navigate = useNavigate();

    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === "") navigate("/")

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3,
        })
    }, [])

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {   
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {   
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value,
        });
    }

    const handleNextStep = () => {
        if(state.email != "" && state.github != "") {
            navigate("/finally")
        }else{
            alert("Preencha todos os dados!");
        }
    }

    const verifyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.code === "Enter"){
            if(state.email === "" || state.github === ""){
                document.getElementById(`${Number(e.currentTarget.id) +1}`)?.focus();
            }else{
                handleNextStep();
            }
        }
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos falar com você.</p>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input 
                    type="email"
                    id="1"
                    autoFocus
                    value={state.email}
                    onChange={handleEmailChange}
                    onKeyDown={verifyEnter}
                    />
                </label>

                <label>
                    Qual seu GitHub?
                    <input 
                    type="url"
                    id="2"
                    value={state.github}
                    onChange={handleGithubChange}
                    onKeyDown={verifyEnter}
                    />
                </label>

                <Link to={"/step2"} className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}