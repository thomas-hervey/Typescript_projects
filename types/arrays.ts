// arrays of arrays
const arrayArrays: string[][] = []
arrayArrays.push(['test'], ['test2'])

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2020-05-08']
importantDates.push(new Date())
importantDates.push('2020-05-09')
