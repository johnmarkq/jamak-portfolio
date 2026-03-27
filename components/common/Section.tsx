import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-2 md:py-14 lg:py-20 lg:mx-20 md:mx-10 mx-2", className)} {...props}>
      {children}
    </section>
  )
}