interface Reporting {
	summary(): string
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary(): string {
		return 'its old'
	}
}

const logReport = (item: Reporting): void => {
	console.log(item.summary())
}

logReport(oldCivic)
