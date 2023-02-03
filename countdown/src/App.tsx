import * as C from "./App.styles";
import { Counter } from "./components/Counter";
import { Title } from "./components/Title";
import { useCountdown } from "./hooks/useCountdown";

function App() {
  const nextYear = new Date().getFullYear() +1;

  const [ day, hour, minute, second ] = useCountdown(`Jan 1, ${nextYear} 00:00:00`)

  return (
    <C.Container>
      <C.ContainerCountdown>
        <Title title={`Contagem regressiva para ${nextYear}`} />
        <C.CounterContainer>
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </C.CounterContainer>
      </C.ContainerCountdown>
    </C.Container>
  )
}

export default App
