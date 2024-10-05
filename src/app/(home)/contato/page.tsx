import { Card, CardContent, CardHeader } from '@/components/card'

export default async function ContatoPage() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-semibold">Contato</h1>
      </CardHeader>
      <CardContent>
        <p>Aqui ficará a página de contatos.</p>
      </CardContent>
    </Card>
  )
}
