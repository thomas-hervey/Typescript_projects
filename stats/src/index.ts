import { MatchReader } from "./MatchReader"
import { CsvFileReader } from "./CsvFileReader"
import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { ConsoleReport } from "./reportTargets/ConsoleReport"
import { HtmlReport } from "./reportTargets/HtmlReport"
import { Summary } from "./Summary"

// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv')

// create an instance of MatchReader and pass in something satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader)

// load data into the reader
matchReader.load() // we can now reference `matchReader.matches`

// create a new summary class using our required analysis and reporter
const summary = new Summary(
	new WinsAnalysis('Man United'),
	new HtmlReport() // NOTE: alternate is to use ConsoleReport, either works here!
)

// build and print report using the summary class
summary.buildAndPrintReport(matchReader.matches)



