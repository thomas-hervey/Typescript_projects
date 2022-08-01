// type Handler = <T>(t: T, options: any) => void

export const iterateRecords = async <T>(
  records: T[],
  callback: any,
  options?: any
): Promise<void> => {
  try {
    let counter = 0

    // print start
    console.log(`Start: Iterating over ${records.length} records`)

    for (let i = 0; i < records.length; i++) {
      counter++

      // add the index to options
      if (options) {
        options.index = i
      }

      // run callback
      await callback(records[i], options)

      // print counter
      if (counter % 10 == 0) console.log(`Record count: ${counter}`)

      // print finished
      if (i === records.length - 1)
        console.log(`Complete: Iterating over ${records.length} records`)
    }
  } catch (error) {
    console.log(`Error in iterateRecords(): ${error}`)
  }
}
