import { useNavigate } from "react-router"
import { Button } from "../../components/Button"
import { ArrowRight } from "lucide-react"
import logo from "../../assets/logo.svg"

export const Home = () => {
  const navigate = useNavigate()

  const handleStartQuiz = () => {
    navigate("/quiz")
  }

  return (
    <>
      <img src={logo} alt="Logo" className="w-12 h-12" />
      <h1 className="font-semibold text-xl lg:text-2xl">Quiz: Mulheres Notáveis</h1>
      <p className="lg:text-xl font-light">Teste seus conhecimentos sobre mulheres que fizeram história!</p>
      <Button 
      onClick={handleStartQuiz}
      className="bg-[#E1C8F4] py-1 px-2 w-full"
      >
        Iniciar quiz
        <ArrowRight />
      </Button>
    </>
  )
}