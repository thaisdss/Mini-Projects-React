import type { ControllerRenderProps } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select"
import type { ShoppingItem } from "../.."
import { FormControl } from "@/components/ui/form"

type SelectQuantityTypeProps = {
  field: ControllerRenderProps<ShoppingItem>
  className?: string
}

export function SelectQuantityType({ field, className }: SelectQuantityTypeProps) {
  return (
    <Select 
    onValueChange={field.onChange}
    defaultValue={String(field.value)}
    >
      <FormControl>
        <SelectTrigger className={className}>
          <SelectValue placeholder="unidade" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tipo da quantidade</SelectLabel>
          <SelectItem value="un">unidade</SelectItem>
          <SelectItem value="kg">kilo</SelectItem>
          <SelectItem value="g">grama</SelectItem>
          <SelectItem value="ml">ml</SelectItem>
          <SelectItem value="caixa">caixa</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}