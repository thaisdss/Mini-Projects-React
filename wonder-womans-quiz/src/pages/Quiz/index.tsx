import { useAtomValue, useSetAtom } from "jotai"
import { ArrowRight } from "lucide-react"
import { currentQuestionIdAtom, currentQuestionAtom, totalQuestionsAtom, nextQuestionAtom, hitsAtom } from "../../atoms/Questions"
import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router"
import logo from "../../assets/logo.svg"

export const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null)

  const currentQuestionId = useAtomValue(currentQuestionIdAtom)
  const currentQuestion = useAtomValue(currentQuestionAtom)
  const totalQuestions = useAtomValue(totalQuestionsAtom)
  const hits = useSetAtom(hitsAtom)

  const isLastQuestion = currentQuestionId === totalQuestions

  const nextQuestion = useSetAtom(nextQuestionAtom)

  const navigate = useNavigate()

  const handleNextQuestion = () => {
    if (currentQuestionId === totalQuestions) {
      navigate("/result")
      return
    }

    nextQuestion()
    setSelectedAnswer(null)
    setIsCorrectAnswer(null)
  }

  const onCheckQuestionResult = () => {
    if (selectedAnswer === currentQuestion?.correctAnswer) {
      hits((prev) => prev + 1)
      setIsCorrectAnswer(true)
      return
    }

    setIsCorrectAnswer(false)
  }

  const handleSelectedAnswer = (answer: number) => {
    setSelectedAnswer(answer)
  }

  useEffect(() => {
    if (selectedAnswer !== null) {
      onCheckQuestionResult()
    }
  }, [selectedAnswer])

  return (
    <>
      <img src={logo} alt="Logo" className="w-12 h-12" />
      <h2 className="font-semibold text-[18px]">Pergunta {currentQuestionId} de {totalQuestions}</h2>
      <h1 className="text-xl lg:text-2xl font-semibold">Qual alternativa descreve essa informação?</h1>
      <p className="lg:text-xl font-light">{currentQuestion?.text}</p>

      <div className="grid grid-cols-2 gap-2 w-full">
        {currentQuestion?.answers.map((answer) => (
          <Button
            key={answer.id}
            className={`p-2 ${selectedAnswer === answer.id ? "bg-[#C8F4D2]" : "bg-[#E1C8F4]"}`}
            onClick={() => handleSelectedAnswer(answer.id)}
            disabled={selectedAnswer !== null && selectedAnswer !== answer.id}
          >
            {answer.text}
          </Button>
        ))}
      </div>

      {isCorrectAnswer && (
        <p className={`lg:text-xl text-black font-semibold rounded-xs p-2 w-full ${isCorrectAnswer ? "bg-[#C8F4D2]" : "bg-red-400"}`}>
          Correto!
        </p>
      )}

      {!isCorrectAnswer && selectedAnswer !== null && (
        <p className={`lg:text-xl text-black font-semibold rounded-xs p-2 w-full ${isCorrectAnswer ? "bg-[#C8F4D2]" : "bg-red-400"}`}>
          Incorreto! 
          <span className="font-normal block text-sm lg:text-[1rem]">Essa informação é referente a {currentQuestion?.answers[currentQuestion.correctAnswer -1].text}</span>
        </p>
      )}

      {selectedAnswer !== null && (
        <Button 
        className="py-1 px-2 w-full bg-[#E1C8F4]"
        onClick={handleNextQuestion}
        >
          { isLastQuestion ? "Ver resultado" : "Próxima pergunta" }
          <ArrowRight />
        </Button>
      )}
    </>
  )
}