import howItWork from "@/assets/howitwork.png"
import { Check } from "lucide-react"

export const HowItWork = () => {
  return (
    <section className="flex flex-col gap-4 items-center bg-white py-8 mt-12">
      <h2 className="font-bold text-3xl max-md:text-2xl">Como funciona?</h2>
      <div className="flex gap-12 items-center max-md:flex-col">
        <img src={howItWork} alt="como funciona" className="max-md:w-64 max-md:h-64" />
        <div className="grid grid-cols-[1fr_min-content] grid-rows-3 gap-6">
          <p className="font-semibold text-zinc-400 md:text-xl">Acesso a 1 ebook por mês</p>
          <Check className="text-green-500" />

          <p className="font-semibold text-zinc-400 md:text-xl">Curadoria especial</p>
          <Check className="text-green-500" />

          <p className="font-semibold text-zinc-400 md:text-xl">Cancele quando quiser</p>
          <Check className="text-green-500" />
        </div>
      </div>
    </section>
  )
}