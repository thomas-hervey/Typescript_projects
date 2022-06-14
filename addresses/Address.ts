import axios from 'axios'

interface libpostalParse {
	label: string,
	value: string
}

interface FullAddress {
	fullAddress: string
}

interface SegmentedAddress {
	house?: string, 					// venue name e.g. "Brooklyn Academy of Music", and building names e.g. "Empire State Building"
	category?: string, 				// for category queries like "restaurants", etc.
	near?: string, 						// phrases like "in", "near", etc. used after a category phrase to help with parsing queries like "restaurants in Brooklyn"
	house_number?: string, 		// usually refers to the external (street-facing) building number. In some countries this may be a compount, hyphenated number which also includes an apartment number, or a block number (a la Japan), but libpostal will just call it the house_number for simplicity.
	road?: string, 						//street name(s)
	unit?: string, 						// an apartment, unit, office, lot, or other secondary unit designator
	level?: string, 					// expressions indicating a floor number e.g. "3rd Floor", "Ground Floor", etc.
	staircase?: string, 			// numbered/lettered staircase
	entrance?: string, 				// numbered/lettered entrance
	po_box?: string, 					// post office box?: string, // typically found in non-physical (mail-only) addresses
	postcode?: string, 				// postal codes used for mail sorting
	suburb?: string, 					// usually an unofficial neighborhood name like "Harlem", "South Bronx", or "Crown Heights"
	city_district?: string, 	// these are usually boroughs or districts within a city that serve some official purpose e.g. "Brooklyn" or "Hackney" or "Bratislava IV"
	city?: string, 						// any human settlement including cities, towns, villages, hamlets, localities, etc.
	island?: string, 					// named islands e.g. "Maui"
	state_district?: string, 	// usually a second-level administrative division or county.
	state?: string, 					// a first-level administrative division. Scotland, Northern Ireland, Wales, and England in the UK are mapped to "state" as well (convention used in OSM, GeoPlanet, etc.)
	country_region?: string, 	// informal subdivision of a country without any political status
	country?: string, 				// sovereign nations and their dependent territories, anything with an ISO-3166 code.
	world_region?: string, 		// currently only used for appending “West Indies” after the country name, a pattern frequently used in the English-speaking Caribbean e.g. “Jamaica, West Indies”
}

const http = axios.create({
  baseURL: 'http://127.0.0.1:3015/',
	timeout: 100000,
  headers: { 'Content-Type': 'application/json' },
});

export async function runLibpostalParser(text: string): Promise<libpostalParse[]> {
	try {
		const response = await http.post<libpostalParse[]>('/parser', { query: text })
		return response.data

	} catch (error) {
		console.log(`Error in runLibpostal(): ${error}`)
		return []
	}
}


const formatAddresses = (matches: libpostalParse[]): SegmentedAddress[] | undefined => {

	let addresses:SegmentedAddress[] = []

  try {
    // make sure that the response contains a parse array with 1+ values
    if (matches && Array.isArray(matches) && matches.length >= 1) {

      // if there is only a "house", return nothing
      if (matches.length === 1 && matches[0].label === 'house') return addresses

			// set holders
      let currAddress: SegmentedAddress = {}

			// clean up segmented addresses
      matches.map((match: libpostalParse, index: number): void => {

				const { label, value } = match

        // if the label already exists, save it off as a new address
        if (label in currAddress) {
          addresses.push(currAddress)

          // reset the current address
          currAddress = {}
        }

				// add label:value to the current address object
				const currKey = label as string
        currAddress[currKey as keyof typeof currAddress] = value

        // if this is the last label, add it to the addresses
        if (index + 1 === matches.length) {
          addresses.push(currAddress)
        }

      })

			// TODO: add full addresses

			return addresses

    }

		return addresses

  } catch (error) {
    console.log(`Error in formatAddresses(): ${error}`)
  }
}


class Addressing {
	private fullAddresses: string[] = []
	private segmentedAddresses: SegmentedAddress[] = []

	constructor(private text: string) {}

	get input() { return this.text }

	public full(id?: number) {
		if (id) { return this.fullAddresses[id] }
		return this.fullAddresses
	}

	public segments(id?: number) {
		if (id) { return this.segmentedAddresses[id] }
		return this.segmentedAddresses
	}

	private addFullAddresses(text: string): void {


		this.fullAddresses.push('hi there')
	}

	private addSegmentedAddresses(text: string): void {
		this.fullAddresses.push('hi there')
	}


}


const parseText = async (text: string) => {

	const newAddressing = new Addressing(text)
	const parsed = await runLibpostalParser(newAddressing.input)
	const formatted = formatAddresses(parsed)
	console.log(formatted)
}
const testText = 'I love walking in New York City, NY, USA'
parseText(testText)

