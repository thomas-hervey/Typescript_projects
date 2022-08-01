import fs from 'fs'
import * as csv from 'fast-csv'

export class CsvFileReader {
  data: string[][] = []

  constructor(public filename: string) {}

  read2(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',')
      })

    // remove headers
    this.data.shift()
  }

  read() {
    try {
      return new Promise((resolve, reject) => {
        csv
          .parseFile(this.filename)
          .on('error', reject)
          .on('data', (row: any) => {
            this.data.push(row)
          })
          .on('end', () => {
            this.data.shift() // remove the headers
            resolve(this.data)
          })
      })
    } catch (error) {
      console.log(`Error in CsvFileReader.read(): ${error}`)
    }
  }
}
