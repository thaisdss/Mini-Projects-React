import * as C from "./App.styles";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi"
import { UserForm } from "./components/UserForm";
import { ReviewForm } from "./components/ReviewForm";
import { Thanks } from "./components/Thanks";
import { useForm } from "./hooks/useForm";
import { FormEvent, useState } from "react";
import { Steps } from "./components/Steps";
import { Form } from "./types/Form";

function App() {
  const [data, setData] = useState<Form>({
    name: "",
    email: "",
    review: "",
    comment: "",
  });

  function updateFieldHandler(key: string, value: string) {
    setData((prev) => {
      return {...prev, [key]: value};
    });
  }

  const formComponents = [ 
    <UserForm  data={data} updateFieldHandler={updateFieldHandler} />, 
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />, 
    <Thanks data={data} /> 
  ];

  const { 
    currentStep, 
    currentComponent, 
    changeStep, 
    isFirstStep, 
    isLastStep 
  } = useForm(formComponents);

  return (
    <C.Container>
      <C.Header>
        <h2>Deixa sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto.</p>
      </C.Header>
      <C.FormContainer>
        <Steps  currentStep={currentStep} />
        <form onSubmit={(event: FormEvent) => changeStep(currentStep + 1, event)}>
          <C.InputsContainer>{currentComponent}</C.InputsContainer>
          <C.Actions>
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </C.Actions>
        </form>
      </C.FormContainer>
    </C.Container>
  )
}

export default App
