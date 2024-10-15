import { Card, CardContent, CardHeader } from '@/components/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs'
import { getProducts } from '@/services/notion'
import ImagemView from './imagem-view'
import RosarioView from './rosario-view'
import VelaView from './vela-view'

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
