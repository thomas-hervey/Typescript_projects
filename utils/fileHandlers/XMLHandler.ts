import { XMLParser, XMLBuilder } from 'fast-xml-parser'

export class XMLHandler {
  public data: any

  public xml2json(input: string) {
    try {
      const options = {
        ignoreAttributes: false
      }

      const parser = new XMLParser(options)
      this.data = parser.parse(input)
      return this.data
    } catch (error) {
      console.log(`Error in xml2json(): ${error}`)
    }
  }

  json2xml(input: any, nodeName: string) {
    try {
      const options = {
        arrayNodeName: nodeName
      }
      const builder = new XMLBuilder(options)
      this.data = builder.build(input)
      return this.data
    } catch (error) {
      console.log(`Error in json2xml(): ${error}`)
    }
  }
}
