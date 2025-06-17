import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-12 max-md:p-8">
      <h1 className="text-6xl max-md:text-3xl font-bold text-center">Simplifique Seus Estudos</h1>
      <p className="mt-8 max-md:mt-6 text-zinc-400 md:text-xl text-center">Deixe que nós fazermos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.</p>
      <form className="flex items-center gap-4 mt-16 max-md:mt-8">
        <Input 
        className="p-5 pl-3 rounded-sm border-none bg-white text-[#ccc]"
        placeholder="Coloque seu e-mail"
        />
        <Button
        className="rounded-sm p-5 font-normal cursor-pointer"
        >
          Assine Agora
        </Button>
      </form>
      <span className="mt-4 text-zinc-400 text-center">Comece sua assinatura agora mesmo. Cancele quando quiser</span>
    </section>
  )
}