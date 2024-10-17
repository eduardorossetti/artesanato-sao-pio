import { Card, CardContent, CardHeader } from '@/components/card'
import Image from 'next/image'
import Link from 'next/link'
import Clarissas from '@/assets/img/clarissas.png'
import Mosteiro from '@/assets/img/mosteiro.png'
import Logo from '@/assets/img/logo.png'
import Faixa from '@/assets/img/logo-faixa.png'

export default async function HomePage() {
  return (
    <Card>
      <CardHeader className="flex justify-center items-center">
        <Image
          src={Faixa.src}
          alt="Faixa"
          width={Faixa.width}
          height={Faixa.height}
          quality={100}
          className="hidden lg:block"
        />
        <span className="text-center text-base font-semibold lg:hidden">
          Bem-vindo! Em breve, você poderá fazer seu pedido pelo{' '}
          <Link
            href={`https://wa.me/${process.env.PHONE_NUMBER}?text=Olá, gostaria de fazer um pedido!`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-green-600">WhatsApp</span>
          </Link>
        </span>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <Link
            href="/artigos-sacros"
            className="bg-dark rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={Clarissas.src}
                alt="Clarissas"
                width={Clarissas.width}
                height={Clarissas.height}
                className="object-cover w-full transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-white text-center">
              <h2 className="text-lg font-bold">Catálogo</h2>
              <p className="text-base font-semibold ">
                Conheça nossos Artigos Sacros
              </p>
            </div>
          </Link>

          <Link
            href={`${process.env.CLARISSAS_URL}`}
            className="bg-dark rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            target="_blank"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={Mosteiro.src}
                alt="Mosteiro"
                width={Mosteiro.width}
                height={Mosteiro.height}
                className="object-cover w-full transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-white text-center">
              <h2 className="text-lg font-bold">Mosteiro Maria Imaculada</h2>
              <p className="text-base font-semibold ">
                Conheça mais sobre as Clarissas
              </p>
            </div>
          </Link>

          <Link
            href="/quem-somos"
            className="bg-dark rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={Logo.src}
                alt="Logo"
                width={Logo.width}
                height={Logo.height}
                className="object-cover w-full transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-white text-center">
              <h2 className="text-lg font-bold">Quem Somos?</h2>
              <p className="text-base font-semibold ">
                Confira nossas aspirações
              </p>
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
