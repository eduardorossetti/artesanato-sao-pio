import { Card, CardContent, CardHeader } from '@/components/card'

export default async function HomePage() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-semibold">Tela Inicial</h1>
      </CardHeader>
      <CardContent>
        <p>Aqui ficará a tela inicial do site.</p>
      </CardContent>
    </Card>
  )
}
