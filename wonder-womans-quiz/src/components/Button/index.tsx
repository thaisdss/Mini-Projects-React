import type { ReactNode } from "react"
import { clsx } from "clsx"

type ButtonProps ={
  children: ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button 
    className={clsx(
      "flex gap-2 items-center justify-center rounded-xs text-black font-semibold cursor-pointer disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed",
      className
    )}
    {...props}
    >
      {children}
    </button>
  )
}