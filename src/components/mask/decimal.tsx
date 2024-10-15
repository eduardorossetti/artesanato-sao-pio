'use client'

import { NumericFormat } from 'react-number-format'

interface DecimalConfig {
  decimalSeparator?: string
  precision?: number
  prefix?: string
  thousandSeparator?: string
}

export function MaskDecimal({
  value,
  config,
}: {
  value: number
  config?: DecimalConfig
}) {
  return (
    <NumericFormat
      fixedDecimalScale
      value={value}
      displayType="text"
      decimalSeparator={config?.decimalSeparator ?? ','}
      thousandSeparator={config?.thousandSeparator ?? '.'}
      decimalScale={config?.precision ?? 2}
      prefix={config?.prefix ?? ''}
    />
  )
}

export function MaskMoney({ value }: { value: number }) {
  return <MaskDecimal value={value} config={{ prefix: 'R$ ' }} />
}
