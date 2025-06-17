import { Check } from "lucide-react"
import { Button } from "../ui/button"

type PlanContentProps = {
  title: string
  description: string
  price: number
  type: 'monthly' | 'yearly'
  features: string[]
}

export const PlanContent = ({ title, description, price, type, features }: PlanContentProps) => {
  return (
    <div className="p-8 mt-12 bg-white rounded-md border-1 border-zinc-200">
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="text-zinc-400 text-sm pl-4 mt-2">{description}</p>
      <div className="mt-8">
        <span className="text-4xl font-bold">R${price.toLocaleString()}</span>
        <span className="text-zinc-400 text-xl">{type === 'monthly' ? ' / mês' : ' / ano'}</span>
      </div>
      <div className="grid grid-cols-[min-content_1fr] gap-2 mt-6 items-center">
        {features.map(feature => (
          <>
            <Check className="text-green-500 size-5" />
            <span 
            key={feature} 
            className="text-zinc-600 text-sm"
            >
              {feature}
            </span>
          </>
        ))}
      </div>
      <Button className="cursor-pointer w-full mt-12">Assine Agora</Button>
    </div>
  )
}