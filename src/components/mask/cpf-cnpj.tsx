'use client'

import { PatternFormat } from 'react-number-format'

export function MaskCpfCnpj({ cpf }: { cpf?: string | null }) {
  if (!cpf) return null

  const format = cpf.length <= 11 ? '###.###.###-##' : '##.###.###/####-##'

  return <PatternFormat value={cpf} displayType="text" format={format} />
}
