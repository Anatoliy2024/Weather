import clsx from "clsx"
import { ReactNode } from "react"

type UiButtonProps = {
  onClick: () => void
  className?: string
  children: ReactNode
}

export function UiButton({ onClick, className, children }: UiButtonProps) {
  return (
    <button onClick={onClick} className={clsx("p-1 rounded", className)}>
      {children}
    </button>
  )
}
