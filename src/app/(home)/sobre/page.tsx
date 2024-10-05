import { Card, CardContent, CardHeader } from '@/components/card'

export default async function SobrePage() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-semibold">Quem Somos?</h1>
      </CardHeader>
      <CardContent>
        <p>Aqui ficará o sobre o artesanato.</p>
      </CardContent>
    </Card>
  )
}
