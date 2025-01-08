interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={`border rounded-lg shadow-md p-4 ${className}`}>{children}</div>
}

interface CardHeaderProps {
  children: React.ReactNode;
}

export function CardHeader({ children }: CardHeaderProps) {
  return <div className="border-b pb-2">{children}</div>
}

interface CardTitleProps {
  children: React.ReactNode;
}

export function CardTitle({ children }: CardTitleProps) {
  return <h2 className="text-lg font-bold">{children}</h2>
}

interface CardDescriptionProps {
  children: React.ReactNode;
}

export function CardDescription({ children }: CardDescriptionProps) {
  return <p className="text-sm text-gray-600">{children}</p>
}

interface CardContentProps {
  children: React.ReactNode;
}

export function CardContent({ children }: CardContentProps) {
  return <div className="py-4">{children}</div>
}

interface CardFooterProps {
  children: React.ReactNode;
}

export function CardFooter({ children }: CardFooterProps) {
  return <div className="pt-4">{children}</div>
} 