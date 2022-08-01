type Shape = {
  tokens: string[]
  tokenLength: number
  queryLength: number
  queryLengthNoDelimiter: number
}

export const calculateShape = (words: string[]): Shape => {
  const shape: Shape = {
    tokens: words,
    tokenLength: words.length,
    queryLength: words.join(' ').length,
    queryLengthNoDelimiter: words.join('').length
  }

  return shape
}

// @ts-nocheck
export const toCamelCase = (rows: any) => {
  return rows.map((row: any) => {
    const replaced = {}

    for (const key in row) {
      const camelCase = key.replace(/([-_][a-z])/gi, ($1) =>
        $1.toUpperCase().replace('_', '')
      )
      replaced[camelCase] = row[key]
    }

    return replaced
  })
}
