'use client'

import { useEffect } from 'react'

import { RotateCcwIcon, ShieldXIcon } from 'lucide-react'

import { Button } from '@/components/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => console.error(error), [error])

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <ShieldXIcon />
          Erro
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p>
          Se você acredita que isso é um erro, por favor, entre em contato com o
          suporte.
        </p>
        <pre className="mt-3 whitespace-pre-wrap break-all rounded-md bg-danger p-3 text-left text-sm text-white">
          <code>{error.message}</code>
        </pre>
      </CardContent>

      <CardFooter>
        <Button variant="brand" onClick={() => reset()}>
          <RotateCcwIcon className="mr-2 h-5 w-5" />
          <span>Tentar novamente</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
