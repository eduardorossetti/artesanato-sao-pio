import { Card, CardContent, CardHeader } from '@/components/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs'
import { getProducts } from '@/services/notion'
import ImagemView from './imagem-view'
import RosarioView from './rosario-view'
import VelaView from './vela-view'
import Link from 'next/link'

export interface Product {
  status: string
  category: string
  price: number
  image: string
  description: string
}

export default async function ArtigosSacrosPage() {
  const products = await getProducts()

  const velas = products.filter((product) => product.category === 'vela')
  const imagens = products.filter((product) => product.category === 'imagem')
  const rosarios = products.filter((product) => product.category === 'rosario')

  return (
    <Card>
      <Tabs defaultValue="velas">
        <CardHeader>
          <span className="text-center text-base font-semibold lg:hidden mb-3">
            Em breve, você terá mais atualizações sobre nosso catálogo e poderá
            fazer seu pedido pelo{' '}
            <Link
              href={`https://wa.me/${process.env.PHONE_NUMBER}?text=Olá, gostaria de fazer um pedido!`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-green-600">WhatsApp</span>
            </Link>
          </span>

          <TabsList>
            <TabsTrigger value="velas">Velas</TabsTrigger>
            <TabsTrigger value="imagens">Imagens Sacras</TabsTrigger>
            <TabsTrigger value="rosarios">Terços</TabsTrigger>
          </TabsList>
        </CardHeader>

        <TabsContent value="velas">
          <CardContent>
            <VelaView velas={velas} />
          </CardContent>
        </TabsContent>

        <TabsContent value="imagens">
          <CardContent>
            <ImagemView imagens={imagens} />
          </CardContent>
        </TabsContent>

        <TabsContent value="rosarios">
          <CardContent>
            <RosarioView rosarios={rosarios} />
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
