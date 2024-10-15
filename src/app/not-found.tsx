import Link from 'next/link'

export default function Root404Page() {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-white">404</h1>

        <p className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Ops!
        </p>

        <p className="mt-4 text-white">
          Não conseguimos encontrar a página que você estava procurando.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded bg-brand px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}
