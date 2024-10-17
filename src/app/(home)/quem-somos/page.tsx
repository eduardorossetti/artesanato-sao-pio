import { Card, CardContent, CardHeader } from '@/components/card'
import Link from 'next/link'

export default async function QuemSomosPage() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-semibold">Quem Somos?</h1>
      </CardHeader>
      <CardContent>
        <h2 className="text-md font-semibold">Qual nossa finalidade?</h2>
        <p>
          Nossa finalidade é divulgar a vida e os trabalhos artesanais das Irmãs
          Clarissas do Mosteiro Maria Imaculada, de Marília-SP, que vivem suas
          entregas ao Senhor pela vida monástica, com intenso amor e
          generosidade.
        </p>
        <p>
          “Ora et Labora”. Como conhecemos pela regra monástica de São Bento,
          inspirador da vida contemplativa no ocidente, o trabalho manual é
          pilar essencial no cotidiano do religioso, juntamente com a oração. No
          labor do trabalho diário, encontramos o mesmo Senhor que, escondido na
          carpintaria de Narazé, soube oferecer cada gota de Seu suor ao Bondoso
          Pai, em favor de toda humanidade.
        </p>

        <h2 className="text-md font-semibold mt-4">Agradecimento</h2>
        <p>
          Em breve, divulgaremos mais sobre seus trabalhos, onde você poderá
          fazer seu pedido. Enquanto isso, confira os links na bio pelo
          instagram e conheça um pouco mais da vida das irmãs clarissas.
        </p>

        <h2 className="text-md font-semibold mt-4">Entre em Contato</h2>
        <p>
          Se você tiver alguma dúvida ou quiser saber mais sobre o nosso
          trabalho, não hesite em entrar em contato conosco:
        </p>
        <ul className="list-disc ml-6">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${process.env.MAIL_TO}`}
              className="text-blue-800 hover:text-blue-900"
            >
              artesanatosaopio@gmail.com
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
