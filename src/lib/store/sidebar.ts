import { create } from 'zustand'

interface SidebarStore {
  sidebarOpened: boolean
  hideSidebar: VoidFunction
  showSidebar: VoidFunction
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  sidebarOpened: false,
  hideSidebar: () => set({ sidebarOpened: false }),
  showSidebar: () => set({ sidebarOpened: true }),
}))
