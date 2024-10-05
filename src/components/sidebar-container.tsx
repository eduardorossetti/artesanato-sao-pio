'use client'

import { ReactNode, useEffect } from 'react'

import { XIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/button'
import { ScrollArea } from '@/components/scroll-area'
import { cn } from '@/lib/helpers/classname'
import { useSidebarStore } from '@/lib/store/sidebar'

export function SidebarContainer({ children }: { children: ReactNode }) {
  const sidebarOpened = useSidebarStore((state) => state.sidebarOpened)
  const hideSidebar = useSidebarStore((state) => state.hideSidebar)
  const pathname = usePathname()

  useEffect(hideSidebar, [pathname, hideSidebar])

  return (
    <>
      <div
        style={{ backfaceVisibility: 'hidden' }}
        className={cn(
          'duration-300 fixed bottom-0 left-[calc(-295px-env(safe-area-inset-left))] top-0 z-[1001] flex w-[calc(275px+env(safe-area-inset-left))] max-w-full transform-gpu overflow-y-auto bg-light shadow-[0_0_28px_#66666614] transition-[left] lg:hidden',
          { 'left-0': sidebarOpened },
        )}
      >
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="absolute right-4 top-[calc(1rem+env(safe-area-inset-top))] z-50 h-8 w-8"
          onClick={hideSidebar}
        >
          <XIcon className="h-5 w-5" />
        </Button>

        <ScrollArea>{children}</ScrollArea>
      </div>

      {sidebarOpened && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-[1000] overflow-hidden bg-black/10 lg:hidden"
          onClick={hideSidebar}
        />
      )}
    </>
  )
}
