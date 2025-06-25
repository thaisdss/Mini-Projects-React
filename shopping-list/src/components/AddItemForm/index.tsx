import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { SelectQuantityType } from "./components/SelectQuantityType"
import { useRef } from "react"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSetAtom } from "jotai"
import { addItemAtom } from "@/atoms/ShoppingList"

const shoppingItemSchema = z.object({
  label: z.string().nonempty("O nome do item é obrigatório"),
  quantity: z.number().min(1, "Quantidade mínima de 1").transform((value) => Number(value)),
  type: z.enum(["un", "kg", "g", "ml", "caixa"], {
    required_error: "O tipo da quantidade é obrigatório",
  }),
})

export type ShoppingItem = z.infer<typeof shoppingItemSchema>

export const AddItemForm = () => {
  const addItem = useSetAtom(addItemAtom)
  const ref = useRef<HTMLInputElement>(null)

  const form = useForm<ShoppingItem>({
    resolver: zodResolver(shoppingItemSchema),
    defaultValues: {
      label: "",
      quantity: 1,
      type: "un",
    }
  })

  const handleSubmit = (data: ShoppingItem) => {
    addItem(data)
    ref.current?.focus()
    form.reset()
  }

  return (
    <Form {...form}>
      <form 
      className="flex items-end justify-center max-md:flex-col max-md:items-stretch max-md:gap-4 gap-1.5 mt-6 w-full"
      onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField 
        control={form.control}
        name="label"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1 flex-1">
            <FormLabel
            htmlFor="item" 
            className="text-sm text-zinc-400 font-normal"
            >
              Item
            </FormLabel>
            <FormControl>
              <Input 
              id="item" 
              type="text"
              className="border-1 border-zinc-300 p-6 rounded-md"
              {...field}
              ref={ref}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

        <FormField 
        control={form.control}
        name="quantity"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1 min-w-48">
            <FormLabel
            htmlFor="quantity" 
            className="text-sm text-zinc-400 font-normal"
            >
              Quantidade
            </FormLabel>

            <FormControl>
              <Input 
              id="quantity" 
              type="number"
              className="border-1 border-zinc-300 p-6 rounded-md"
              {...field}
              onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

        <FormField 
        control={form.control}
        name="type"
        render={({ field }) => (
          <FormItem>
            <SelectQuantityType field={field} className="p-6 min-w-48 max-md:w-full" />
          </FormItem>
        )}
        />

        <Button 
        type="submit"
        className="bg-[#E1A0FF] py-6 lg:w-18 hover:bg-[#5856D6]"
        >
          <Plus className="text-white" />
        </Button>
      </form>
    </Form>
  )
}