/// <reference types="@types/google.maps" />
import { Company } from './Company'
import { User } from './User'

const company = new Company()
const user = new User()

import { CustomMap } from './CustomMap'

const customMap = new CustomMap('map')
customMap.addMarker(company)
customMap.addMarker(user)
