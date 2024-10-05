'use client'

import { MenuIcon } from 'lucide-react'

import { useSidebarStore } from '@/lib/store/sidebar'

export function SidebarOpenButton() {
  const showSidebar = useSidebarStore((state) => state.showSidebar)

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center text-sm font-semibold text-white outline-none lg:hidden"
      onClick={showSidebar}
    >
      <MenuIcon className="mr-1 h-6 w-6" />
    </button>
  )
}
