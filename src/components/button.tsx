import React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/helpers/classname'
import { Slot } from '@radix-ui/react-slot'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        brand: 'bg-brand text-white hover:bg-brand/90',
        success: 'bg-success text-white hover:bg-success/90',
        warning: 'bg-warning text-white hover:bg-warning/90',
        danger: 'bg-danger text-white hover:bg-danger/90',
        outline:
          'text-stone-600 border border-zinc-200 bg-light hover:bg-stone-100 hover:text-black',
        link: 'text-primary underline-offset-4 hover:underline',
        text: 'text-neutral-600',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
