import { checkedItemAtom, shoppingListUncheckedAtom } from "@/atoms/ShoppingList"
import { useAtomValue, useSetAtom } from "jotai"
import { Checkbox } from "../ui/checkbox"
import { ListItem } from "../ListItem"

export const UncheckedItemsList = () => {
  const shoppingList = useAtomValue(shoppingListUncheckedAtom)
  const checkedItem = useSetAtom(checkedItemAtom)

  return (
    <>
    {shoppingList && (
      <ul className="flex flex-col gap-4 list-none mt-14 w-full">
        {shoppingList.map((item) => (
          <ListItem 
          key={item.id} 
          item={item} 
          adornment={
            <Checkbox 
            className="rounded-full w-8 h-8"
            checkIconSize={24}
            onCheckedChange={() => checkedItem(item.id)}
            />
          }
          />
        ))}
    </ul>
    )}

    {shoppingList.length === 0 && (
      <p className="text-center text-black mt-14">
        Sua lista de compras está vazia.
      </p>
    )}
    </>
  )
}