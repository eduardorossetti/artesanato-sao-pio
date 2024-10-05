'use client'

import { ReactNode } from 'react'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/helpers/classname'

type SingleItemProps = LinkProps & {
  href: string
  children: ReactNode
}

type DropdownMenuProps = LinkProps & {
  children: ReactNode
}

export const SingleItem = ({ href, children, ...props }: SingleItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li className="flex flex-col">
      <Link
        href={href}
        className={cn(
          'relative flex h-11 w-full flex-grow items-center px-5 py-2 text-base font-semibold outline-none hover:text-brand [&>svg]:mr-2 [&>svg]:h-5 [&>svg]:w-5',
          { 'text-brand': isActive },
        )}
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}

export const DropdownMenuItem = ({ children, ...props }: DropdownMenuProps) => {
  return (
    <li className="flex flex-col">
      <Link
        className="relative flex h-11 w-full flex-grow items-center px-5 py-2 text-sm font-semibold outline-none hover:text-brand [&>svg]:mr-2 [&>svg]:h-5 [&>svg]:w-5"
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}
