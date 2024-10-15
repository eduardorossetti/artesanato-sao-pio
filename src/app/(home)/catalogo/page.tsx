import { getProducts } from '@/services/notion'
import { Card, CardContent, CardHeader } from '@/components/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs'
import Image from 'next/image'
import { MaskMoney } from '@/components/mask/decimal'

export default async function CatalogoPage() {
  const products = await getProducts()

  const velas = products.filter((product) => product.category === 'vela')
  const imagens = products.filter((product) => product.category === 'imagem')
  const tercos = products.filter((product) => product.category === 'terço')

  return (
    <Card>
      <Tabs defaultValue="velas">
        <CardHeader>
          <TabsList>
            <TabsTrigger value="velas">Velas</TabsTrigger>
            <TabsTrigger value="imagens">Imagens</TabsTrigger>
            <TabsTrigger value="tercos">Terços</TabsTrigger>
          </TabsList>
        </CardHeader>

        <TabsContent value="velas">
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {velas.map((product, index) => (
                <Card
                  key={index}
                  className="bg-zinc-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.description}
                      width={500}
                      height={500}
                      quality={100}
                      priority
                      className="object-cover w-full transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-white text-center">
                    <h2 className="text-lg font-semibold ">
                      {product.description}
                    </h2>
                    <p className="text-xl font-bold ">
                      <MaskMoney value={product.price} />
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="imagens">
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {imagens.map((product, index) => (
                <Card
                  key={index}
                  className="bg-zinc-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.description}
                      width={500}
                      height={500}
                      quality={100}
                      className="object-cover w-full transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-white text-center">
                    <h2 className="text-lg font-semibold ">
                      {product.description}
                    </h2>
                    <p className="text-xl font-bold ">
                      <MaskMoney value={product.price} />
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="tercos">
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {tercos.map((product, index) => (
                <Card
                  key={index}
                  className="bg-zinc-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.description}
                      width={500}
                      height={500}
                      quality={100}
                      className="object-cover w-full transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-white text-center">
                    <h2 className="text-lg font-semibold ">
                      {product.description}
                    </h2>
                    <p className="text-xl font-bold ">
                      <MaskMoney value={product.price} />
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
