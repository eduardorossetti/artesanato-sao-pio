import Link from 'next/link'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          Artesanato São Pio
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/about" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Sobre nós</span>
        </Link>
      </div>
    </div>
  )
}
