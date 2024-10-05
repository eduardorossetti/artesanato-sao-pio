import {
  BookAIcon,
  BoxIcon,
  ChurchIcon,
  InstagramIcon,
  MailIcon,
  PhoneCall,
} from 'lucide-react'
import Link from 'next/link'

import { LogoNav } from '@/components/logo-nav'
import { MenuItem } from '@/components/menu-item'
import { Separator } from '@/components/separator'
import { SidebarOpenButton } from '@/components/sidebar-button'
import { SidebarContainer } from '@/components/sidebar-container'

type HeaderLinkProps = {
  href: string
  children: React.ReactNode
}

const HeaderLink = ({ href, children }: HeaderLinkProps) => (
  <Link prefetch={false} className="mr-4" href={href}>
    <span className="text-base font-semibold text-white">{children}</span>
  </Link>
)

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id="panel" className="flex w-full flex-col overflow-x-hidden">
      <header className="fixed left-0 right-0 top-0 z-[97] flex min-h-[calc(70px+env(safe-area-inset-top))] items-stretch justify-between bg-dark pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)] shadow-[0_4px_30px_4px_#0000001a] transition-[height] duration-300">
        <div className="mx-auto flex w-full items-center justify-between gap-4 px-4 lg:px-20">
          <Link prefetch={false} className="flex items-center" href="/">
            <LogoNav />
            <span className="pl-3 text-base font-bold text-white">
              Artesanato São Pio
            </span>
          </Link>

          <div className="flex justify-end">
            <div className="hidden lg:block">
              <HeaderLink href="/catalogo">Catálogo</HeaderLink>
              <HeaderLink href="/mosteiro">Sobre o Mosteiro</HeaderLink>
              <HeaderLink href="/sobre">Sobre Nós</HeaderLink>
              <HeaderLink href="/contato">Contate-nos</HeaderLink>
            </div>
            <SidebarOpenButton />
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-full flex-auto items-stretch pl-[calc(1rem+env(safe-area-inset-left))] pr-[calc(1rem+env(safe-area-inset-right))] lg:px-20 pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
        <div className="max-w-full flex-auto flex-shrink-0 pb-4 pt-[calc(90px+env(safe-area-inset-top))] lg:flex lg:flex-col lg:pt-[100px]">
          {children}
        </div>
      </main>

      <SidebarContainer>
        <ul className="pb-[calc(1rem+env(safe-area-inset-bottom))] pl-[calc(.625rem+env(safe-area-inset-left))] pr-[calc(.625rem+env(safe-area-inset-right))] pt-[calc(1rem+env(safe-area-inset-top))]">
          <div className="flex flex-col items-center justify-center">
            <MenuItem.Single prefetch={false} href="/">
              <LogoNav />
            </MenuItem.Single>

            <h4 className="mt-4 flex items-center text-base font-bold uppercase tracking-wider">
              Artesanato São Pio
            </h4>
          </div>

          <Separator className="my-3" />

          <MenuItem.Single href="/catalogo">
            <BoxIcon />
            <span>Catálogo</span>
          </MenuItem.Single>
          <MenuItem.Single href="/sobre">
            <BookAIcon />
            <span>Sobre Nós</span>
          </MenuItem.Single>
          <MenuItem.Single href="/mosteiro">
            <ChurchIcon />
            <span>Sobre o Mosteiro</span>
          </MenuItem.Single>
          <MenuItem.Single href="/contato">
            <MailIcon />
            <span>Fale Conosco</span>
          </MenuItem.Single>

          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center space-y-4 m-3">
            <Separator />
            <div className="flex items-center justify-center space-x-4">
              <Link
                href="https://www.instagram.com/artesanatosaopio/"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon className="text-pink-500 hover:text-pink-600" />
              </Link>
              <Link
                href="https://wa.me/18998044847"
                target="_blank"
                aria-label="WhatsApp"
              >
                <PhoneCall className="text-green-500 hover:text-green-600" />
              </Link>
            </div>
          </div>
        </ul>
      </SidebarContainer>

      <footer className="fixed left-0 right-0 bottom-0 z-[97] flex items-center justify-center bg-dark p-4 shadow-[0_4px_30px_4px_#0000001a]">
        <span className="text-xs font-semibold text-white">
          © {new Date().getFullYear()} Artesanato São Pio
        </span>
      </footer>
    </div>
  )
}
