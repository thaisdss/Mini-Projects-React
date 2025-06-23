import { ArrowRight } from "lucide-react"
import trophy from "../../assets/trophy.svg"
import { Button } from "../../components/Button"
import { hitsAtom, resetQuestionsAtom, totalQuestionsAtom } from "../../atoms/Questions"
import { useAtomValue, useSetAtom } from "jotai"
import { useNavigate } from "react-router"
import { resultMessages } from "../../constants/resultMessages"

export const Result = () => {
  const hits = useAtomValue(hitsAtom)
  const totalQuestions = useAtomValue(totalQuestionsAtom)
  const resetQuiz = useSetAtom(resetQuestionsAtom)

  const totalPercentageOfHits = hits / totalQuestions * 100
  const resultMessage = resultMessages.find(item => item.condition(totalPercentageOfHits))

  const navigate = useNavigate()

  const handleResetQuiz = () => {
    resetQuiz()
    navigate("/")
  }

  return (
    <>
      <img src={trophy} alt="Troféu" />
      <h2 className="font-semibold text-2xl">Quiz concluído!</h2>
      <h1 className="font-semibold text-3xl">{hits}/{totalQuestions}</h1>
      <p className="font-light">{resultMessage?.message}</p>
      <div className="flex flex-col items-center justify-center gap-2 bg-zinc-700 p-4 rounded-md">
        <h2 className="font-semibold">Você sabia?</h2>
        <p>Muitas das mulheres apresentadas neste quiz enfrentaram enormes desafios e preconceitos em suas épocas, mas mesmo assim conseguiram deixar um legado duradouro que inspirou gerações.</p>
      </div>
      <Button
      className="bg-[#E1C8F4] p-2 w-full"
      onClick={handleResetQuiz}
      >
        Reiniciar quiz
        <ArrowRight />
      </Button>
    </>
  )
}