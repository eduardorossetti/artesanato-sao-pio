import { cn } from '@/lib/helpers/classname'

const HomeBoxBackground: React.FC<
  React.InputHTMLAttributes<HTMLDivElement>
> = ({ className, children, ...props }) => (
  <div
    {...props}
    className={cn(
      'flex min-h-screen w-full flex-col flex-wrap items-center justify-center bg-gradient-to-bl from-primary to-brand px-4',
      className,
    )}
  >
    {children}
  </div>
)

const HomeBox: React.FC<React.InputHTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    {...props}
    className={cn(
      'my-10 w-full rounded-lg bg-light px-7 py-10 md:max-w-md md:px-14 md:py-12',
      className,
    )}
  >
    {children}
  </div>
)

export { HomeBox, HomeBoxBackground }
