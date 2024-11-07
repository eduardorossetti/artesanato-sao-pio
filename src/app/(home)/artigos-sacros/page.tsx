import { Card, CardContent, CardHeader } from '@/components/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs'
import { getProducts } from '@/services/notion'
import ImagemView from './imagem-view'
import VelaView from './vela-view'
import Link from 'next/link'

export interface Product {
  status: string
  category: string
  price: number
  photo: string
  description: string
}

export default async function ArtigosSacrosPage() {
  const products = await getProducts()

  const velas = products.filter((product) => product.category === 'vela')
  const imagens = products.filter((product) => product.category === 'imagem')

  return (
    <Card>
      <Tabs defaultValue="velas">
        <CardHeader>
          <span className="text-center text-base font-semibold lg:hidden mb-3">
            Bem-vindo! Faça seu pedido pelo{' '}
            <Link
              href={`https://wa.me/${process.env.PHONE_NUMBER}?text=Olá, gostaria de fazer um pedido!`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-green-600">WhatsApp</span>
            </Link>
          </span>

          <TabsList>
            <TabsTrigger value="velas">Velas Sacras</TabsTrigger>
            <TabsTrigger value="imagens">Imagens Sacras</TabsTrigger>
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
      </Tabs>
    </Card>
  )
}
