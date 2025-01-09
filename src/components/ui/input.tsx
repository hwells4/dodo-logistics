import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return <input className={cn("border rounded p-2", className)} {...props} />;
}
