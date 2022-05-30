"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const Summary_1 = require("./Summary");
// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create an instance of MatchReader and pass in something satisfying the DataReader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
// load data into the reader
matchReader.load(); // we can now reference `matchReader.matches`
// create a new summary class using our required analysis and reporter
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
// build and print report using the summary class
summary.buildAndPrintReport(matchReader.matches);
