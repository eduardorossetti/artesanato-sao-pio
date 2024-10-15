import { MaskMoney } from '@/components/mask/decimal'
import Image from 'next/image'
import { Product } from './page'

interface VelaViewProps {
  velas: Product[]
}

export default async function VelaView({ velas }: VelaViewProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {velas.map((product, index) => (
        <div
          key={index}
          className="bg-zinc-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative overflow-hidden rounded-t-lg">
            <Image
              src={product.image}
              alt={product.description}
              width={500}
              height={500}
              className="object-cover w-full transition-transform duration-500"
              priority
            />
          </div>
          <div className="p-4 text-white text-center">
            <h2 className="text-lg font-semibold ">{product.description}</h2>
            <p className="text-xl font-bold ">
              <MaskMoney value={product.price} />
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
