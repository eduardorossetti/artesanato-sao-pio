import { Card, CardContent, CardHeader } from '@/components/card'
import Link from 'next/link'

export default async function QuemSomosPage() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-semibold">Quem Somos?</h1>
      </CardHeader>
      <CardContent>
        <h2 className="text-md font-semibold mt-4">Nossa Missão</h2>
        <p>
          O Artesanato São Pio é uma valiosa iniciativa em parceria com as Irmãs
          Clarissas do Mosteiro Maria Imaculada, localizado em Marília-SP. Nossa
          missão é promover e divulgar os trabalhos artesanais singulares
          produzidos pelas irmãs, oferecendo ao público a oportunidade de
          apreciar e adquirir essas obras de arte devocional.
        </p>

        <h2 className="text-md font-semibold mt-4">Apoio ao Mosteiro</h2>
        <p>
          Através da venda de nossos artigos sacros, o Artesanato São Pio não
          apenas viabiliza a manutenção do Mosteiro, mas também assegura a
          continuidade da vida contemplativa das irmãs, permitindo que elas
          dediquem suas vidas à oração e ao serviço espiritual. Cada compra
          contribui para a sustentação desse estilo de vida único e
          profundamente significativo.
        </p>

        <h2 className="text-md font-semibold mt-4">Agradecimento</h2>
        <p>
          Expressamos nossa sincera gratidão a todos que colaboram com nossa
          missão. Seu apoio é fundamental para manter a presença de Deus em
          nosso mundo e para continuar este trabalho tão especial. Juntos, somos
          capazes de fazer a diferença e espalhar o amor e a paz que os artigos
          artesanais representam.
        </p>

        <p className="mt-4">
          <strong>
            Descubra nossos produtos e junte-se a nós nessa missão!
          </strong>
        </p>

        <h2 className="text-md font-semibold mt-4">Entre em Contato</h2>
        <p>
          Se você tiver alguma dúvida ou quiser saber mais sobre o nosso
          trabalho e produtos, não hesite em entrar em contato conosco pelos
          seguintes canais:
        </p>
        <ul className="list-disc ml-6">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${process.env.MAIL_TO}`}
              className="text-blue-800 hover:text-blue-900"
            >
              contato@artesanatosaopio.com
            </Link>
          </li>
          <li>
            Instagram:{' '}
            <Link
              href={`${process.env.INSTAGRAM_URL}`}
              target="_blank"
              aria-label="Instagram"
            >
              <span className="text-pink-800 hover:text-pink-900">
                @artesanatosaopio
              </span>
            </Link>
          </li>
          <li>
            WhatsApp:{' '}
            <Link
              href={`https://wa.me/${process.env.PHONE_NUMBER}?text=Olá, gostaria de saber mais sobre o Artesanato!`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-green-800 hover:text-green-900">
                +55 18 99804-4847
              </span>
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
