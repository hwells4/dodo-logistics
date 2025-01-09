import { UseFormReturn } from "react-hook-form";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export function Form({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>;
}

interface FormFieldProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  form: UseFormReturn<any>;
  name: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  render: (props: { field: any }) => React.ReactNode;
}

export function FormField({ form, name, render }: FormFieldProps) {
  const field = form.register(name);
  return render({ field });
}

interface FormItemProps {
  children: React.ReactNode;
}

export function FormItem({ children }: FormItemProps) {
  return <div className="mb-4">{children}</div>;
}

interface FormLabelProps {
  children: React.ReactNode;
}

export function FormLabel({ children }: FormLabelProps) {
  return <label className="block text-sm font-medium">{children}</label>;
}

interface FormControlProps {
  children: React.ReactNode;
}

export function FormControl({ children }: FormControlProps) {
  return <div className="mt-1">{children}</div>;
}

interface FormMessageProps {
  children: React.ReactNode;
}

export function FormMessage({ children }: FormMessageProps) {
  return <span className="text-red-500 text-sm">{children}</span>;
}
