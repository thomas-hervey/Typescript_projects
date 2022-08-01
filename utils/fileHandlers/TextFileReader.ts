import * as fs from 'fs'

export class TextFileReader {
  public text = ''

  constructor(public filename: string) {}

  read() {
    try {
      return new Promise((resolve, reject) => {
        const fileContent = fs.readFileSync(this.filename, 'utf8')

        this.text = fileContent
        resolve(fileContent)
      })
    } catch (error) {
      console.log(`Error in TextFileReader.read(): ${error}`)
    }
  }

  write(data: string) {
    try {
      return new Promise((resolve, reject) => {
        fs.writeFileSync(this.filename, data, {
          encoding: 'utf8',
          flag: 'a+',
          mode: 0o666 // append file mode
        })
      })
    } catch (error) {
      console.log(`Error in TextFileReader.write(): ${error}`)
    }
  }
}
