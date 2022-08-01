import fs from 'fs'

export function chunkArray(array: any, chunkSize: number) {
  return Array.from(
    { length: Math.ceil(array.length / chunkSize) },
    (_, index) => array.slice(index * chunkSize, (index + 1) * chunkSize)
  )
}

export async function uploadData(dataArray: any) {
  try {
    const chunks = chunkArray(dataArray, 100)

    let chunkCounter = 0

    for (const chunk of chunks) {
      const queries = chunk.map((aQuery: any) => {
        return aQuery.query
      })

      const jointQueries = queries.join('.')

      const message = fs.writeFileSync(
        __dirname + `/joint_queries/joint_queries_chunk_${chunkCounter}.txt`,
        jointQueries
      )
      chunkCounter++
    }
  } catch (error) {
    // Catch an error here
  }
}
