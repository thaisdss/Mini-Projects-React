import { ShoppingCart } from "lucide-react"

export const Header = () => {
  return (
      <header className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center rounded-full p-6 bg-[#E1A0FF]">
          <ShoppingCart className="text-white w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold mt-2 text-black dark:text-white">Lista de Compras</h1>
        <p className="text-zinc-400">Facilite sua ida ao supermercado!</p>
        <hr className="w-32 mt-4 border-1 text-zinc-300" />
      </header>
  )
}