import { Card, CardContent, CardHeader } from '@/components/card'

export default async function MosteiroPage() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-semibold">Sobre o Mosteiro</h1>
      </CardHeader>
      <CardContent>
        <p>Aqui ficará o sobre do mosteiro.</p>
      </CardContent>
    </Card>
  )
}
