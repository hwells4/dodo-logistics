interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export function Form({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>
}

interface FormFieldProps {
  control: any; // Replace with the correct type if known
  name: string;
  render: (field: any) => React.ReactNode; // Replace with the correct type if known
}

export function FormField({ control, name, render }: FormFieldProps) {
  return render({ field: control[name] })
}

interface FormItemProps {
  children: React.ReactNode;
}

export function FormItem({ children }: FormItemProps) {
  return <div className="mb-4">{children}</div>
}

interface FormLabelProps {
  children: React.ReactNode;
}

export function FormLabel({ children }: FormLabelProps) {
  return <label className="block text-sm font-medium">{children}</label>
}

interface FormControlProps {
  children: React.ReactNode;
}

export function FormControl({ children }: FormControlProps) {
  return <div className="mt-1">{children}</div>
}

interface FormMessageProps {
  children: React.ReactNode;
}

export function FormMessage({ children }: FormMessageProps) {
  return <span className="text-red-500 text-sm">{children}</span>
} 