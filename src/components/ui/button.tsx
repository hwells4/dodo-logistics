import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  asChild?: boolean;
  variant?: string;
  children: ReactNode;
}

export function Button({ className, asChild, variant, children, ...props }: ButtonProps) {
  const Component = asChild ? 'span' : 'button';

  return (
    <Component className={cn("px-4 py-2 rounded", className)} {...props}>
      {children}
    </Component>
  )
} 