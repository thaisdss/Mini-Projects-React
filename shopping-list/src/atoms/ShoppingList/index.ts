import type { ShoppingItem } from "@/components/AddItemForm"
import type { FullShoppingItem } from "@/types/Item"
import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const removeItem = (shoppingList: FullShoppingItem[], id: string) => {
  return shoppingList.filter(item => item.id !== id)
}

export const addItem = (shoppingList: FullShoppingItem[], item: ShoppingItem) => {
  return [
    ...shoppingList,
    {
      id: crypto.randomUUID(),
      label: item.label,
      quantity: item.quantity,
      type: item.type,
      isChecked: false,
    },
  ]
}

export const checkedItem = (shoppingList: FullShoppingItem[], id: string) => {
  return shoppingList.reduce((acc, item) => {
    if (item.id === id) {
      return [
        ...acc,
        {
          ...item,
          isChecked: true,
        },
      ]
    }
    return [...acc, item]
  }, [] as FullShoppingItem[])
}

export const shoppingListAtom = atomWithStorage('shopping-list', [] as FullShoppingItem[])
export const shoppingListUncheckedAtom = atom((get) => get(shoppingListAtom).filter(item => !item.isChecked)) 
export const shoppingListCheckedAtom = atom((get) => get(shoppingListAtom).filter(item => item.isChecked))

export const addItemAtom = atom(null, (get, set, data: ShoppingItem) => {
  set(shoppingListAtom, addItem(get(shoppingListAtom), data))
})

export const removeItemAtom = atom(null, (get, set, id: string) => {
  set(shoppingListAtom, removeItem(get(shoppingListAtom), id))
})

export const checkedItemAtom = atom(null, (get, set, id: string) => {
  setTimeout(() => {
    set(shoppingListAtom, checkedItem(get(shoppingListAtom), id))
  }, 500)
})
