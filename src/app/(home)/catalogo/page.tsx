import { Card, CardContent, CardHeader } from '@/components/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs'
import Image from 'next/image'

export default async function CatalogoPage() {
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
              {Array.from({ length: 4 }).map((_, index) => (
                <Card
                  key={index}
                  className="bg-zinc-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src="/vela_sagrado_coracao.png"
                      alt="Imagem do produto"
                      width={500}
                      height={500}
                      quality={100}
                      className="object-cover w-full transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-white text-center">
                    <h2 className="text-lg font-semibold ">
                      Vela Sagrado Coração 15x5cm
                    </h2>
                    <p className="text-xl font-bold ">R$ 39,90</p>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="imagens">
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card
                  key={index}
                  className="bg-zinc-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src="/pe-pio.png"
                      alt="Imagem do produto"
                      width={500}
                      height={500}
                      quality={100}
                      className="object-cover w-full transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-white text-center">
                    <h2 className="text-lg font-semibold ">
                      São Pio de Pietrelcina 30cm
                    </h2>
                    <p className="text-xl font-bold ">R$ 139,90</p>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="tercos">
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card
                  key={index}
                  className="bg-zinc-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src="/terco-mariano.png"
                      alt="Imagem do produto"
                      width={500}
                      height={500}
                      quality={100}
                      className="object-cover w-full transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-white text-center">
                    <h2 className="text-lg font-semibold ">
                      Santo Terço Mariano
                    </h2>
                    <p className="text-xl font-bold ">R$ 39,90</p>
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
