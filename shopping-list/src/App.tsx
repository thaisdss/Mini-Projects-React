import { AddItemForm } from "./components/AddItemForm"
import { Header } from "./components/Header"
import { UncheckedItemsList } from "./components/UncheckedItemsList"
import { CheckedItemsList } from "./components/CheckedItemsList"
import { Button } from "./components/ui/button"
import { useSetAtom } from "jotai"
import { shoppingListAtom } from "./atoms/ShoppingList"
import { RESET } from "jotai/utils"
import { ModeToggle } from "./components/ModeToggle"

export function App() {
  const deleteShoppingList = useSetAtom(shoppingListAtom)

  return (
    <div className="bg-white dark:bg-[#1C1C1C] w-full flex flex-col items-center justify-center lg:px-64 px-12 lg:py-24 pt-8 pb-16">
      <ModeToggle />
      <Header />
      <Button 
      className="self-end bg-red-700 hover:bg-red-900 text-white max-md:mt-4"
      onClick={() => deleteShoppingList(RESET)}
      >
        Excluir lista
      </Button>
      <AddItemForm />
      <UncheckedItemsList />
      <CheckedItemsList />
    </div>
  )
}
