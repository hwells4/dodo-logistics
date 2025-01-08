interface AlertProps {
  children: React.ReactNode;
  variant: "destructive" | "default";
}

export function Alert({ children, variant }: AlertProps) {
  return (
    <div className={`p-4 rounded ${variant === "destructive" ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>
      {children}
    </div>
  )
}

export function AlertDescription({ children }: { children: React.ReactNode }) {
  return <span>{children}</span>
} 