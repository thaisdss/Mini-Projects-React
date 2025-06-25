import { shoppingListCheckedAtom } from "@/atoms/ShoppingList"
import { useAtomValue } from "jotai"
import { Check } from "lucide-react"
import { ListItem } from "../ListItem"

export const CheckedItemsList = () => {
  const shoppingList = useAtomValue(shoppingListCheckedAtom)

  return (
    <div className="flex flex-col items-center justify-center mt-16 lg:mt-24 w-full">
      <hr className="border-1 border-zinc-300 w-64" />
      <h1 className="text-2xl lg:text-4xl text-center font-semibold mt-8 lg:mt-12 text-black dark:text-white">Itens já comprados</h1>
      {shoppingList && (
        <ul className="w-full flex flex-col list-none gap-4 max-md:mt-8">
          {shoppingList.map(item => (
            <ListItem 
            key={item.id} 
            item={item} 
            isCheckedList
            adornment={
              <Check className="text-emerald-400 size-10" />
            }
            />
          ))}
        </ul>
      )}
      {shoppingList.length === 0 && (
          <p className="text-center text-black mt-12">
            Você ainda não comprou nada.
          </p>
        )
      }
    </div>
  )
}