import { useNavigate, Link } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { useEffect} from "react";
import { BsFillPersonFill, BsFillBarChartFill , BsEnvelopeFill, BsGithub } from "react-icons/bs";

export function Finally() {
    const navigate = useNavigate();

    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === "" || state.email === "" || state.github === "") navigate("/")

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4,
        })
    }, [])

    return(
        <Theme>
            <C.Container>
                <h1>Cadastro finalizado!</h1>
                <p>Parabéns, {state.name}! Seu cadastro foi concluído com sucesso. Entraremos em contato com você para agendar uma entrevista.</p>

                <hr />

                <h2>Suas informações de cadastro são:</h2>

                <C.Info_Container>
                    <div>
                        <C.Icon><BsFillPersonFill color="#191a59" /></C.Icon>
                        <C.Info>
                            <C.Info_Title>Nome</C.Info_Title>
                            <p>{state.name}</p>
                        </C.Info>
                    </div>

                    <div>
                        <C.Icon><BsFillBarChartFill color="#191a59" /></C.Icon>
                        <C.Info>
                            <C.Info_Title>Nível</C.Info_Title>
                            <p>
                            {state.level === 0 && " Iniciante"}
                            {state.level === 1 && " Programador"}
                            </p>
                        </C.Info>
                    </div>

                    <div>
                        <C.Icon><BsEnvelopeFill color="#191a59" /></C.Icon>
                        <C.Info>
                            <C.Info_Title>E-mail</C.Info_Title>
                            <p>{state.email}</p>
                        </C.Info>
                    </div>

                    <div>
                        <C.Icon><BsGithub color="#191a59" /></C.Icon>
                        <C.Info>
                            <C.Info_Title>GitHub</C.Info_Title>
                            <p>{state.github}</p>
                        </C.Info>
                    </div>
                </C.Info_Container>

                <Link to={"/step3"} className="backButton">Voltar</Link>
            </C.Container>
        </Theme>
    );
}