'use client'

import { PatternFormat } from 'react-number-format'

export function MaskPhone({ phone }: { phone?: string | null }) {
  if (!phone) return null

  const format = phone.length <= 10 ? '(##) ####-####' : '(##) #####-####'

  return <PatternFormat value={phone} displayType="text" format={format} />
}
