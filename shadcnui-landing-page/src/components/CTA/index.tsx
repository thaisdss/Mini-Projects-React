import { Button } from "../ui/button"

export const CTA = () => {
  return (
    <section className="bg-white flex flex-col items-center justify-center py-24 mt-12 max-md:px-8">
      <h1 className="text-6xl max-md:text-3xl font-bold text-center">Pronto Para Mudar Sua Vida?</h1>
      <p className="mt-6 md:text-xl text-zinc-400 text-center">Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos</p>
      <Button className="mt-12 px-32 font-normal rounded-sm">Assine Agora</Button>
      <p className="mt-4 text-sm text-zinc-400 text-center">Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
    </section>
  )
}