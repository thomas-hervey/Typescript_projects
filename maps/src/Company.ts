import faker from 'faker'
import { Mappable } from './CustomMap' // not required, but helps make a direct dependency and show more errors

export class Company implements Mappable {
	companyName: string
	catchPhrase: string
	location: {
		lat: number
		lng: number
	}
	color: string = 'blue'

	constructor() {
		this.companyName = faker.company.companyName()
		this.catchPhrase = faker.company.catchPhrase()
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		}
	}

	markerContent(): string {
		return `
			<h1>Company name is ${this.companyName}</h1>
			<h3>${this.catchPhrase}</h3>
		`
	}
}
