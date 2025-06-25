import { Trash } from "lucide-react"
import { Button } from "../ui/button"
import { removeItemAtom } from "@/atoms/ShoppingList"
import { useSetAtom } from "jotai"
import type { FullShoppingItem } from "@/types/Item"

type ListItemProps = {
  item: FullShoppingItem
  adornment: React.ReactNode
  isCheckedList?: boolean
}

export const ListItem = ({ item, adornment, isCheckedList = false }: ListItemProps) => {
  const removeItem = useSetAtom(removeItemAtom)

  return (
    <li 
    key={item.id}
    className="flex items-center gap-4"
    >
      {adornment}

      <div className="grid grid-cols-[1fr_min-content] grid-rows-2 justify-between items-center border-b-2 border-zinc-300 w-full">
        <h2 className={`lg:text-xl font-semibold ${isCheckedList ? "line-through text-zinc-300" : "text-zinc-400"}`}>{item.label}</h2>
        <span className={`col-start-1 row-start-2 ${isCheckedList ? "line-through text-zinc-300" : "text-zinc-400"}`}>{item.quantity}{item.type}</span>
        <Button 
        onClick={() => removeItem(item.id)}
        className="row-span-2 col-start-2 bg-transparent border-none shadow-none"
        >
          <Trash className="text-red-500 max-md:size-5 size-6" />
        </Button>
      </div>
    </li>
  )
}