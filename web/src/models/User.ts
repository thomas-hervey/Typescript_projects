import { Eventing } from './Eventing'
import { Sync } from './Sync'
import { Attributes } from './Attributes'

// using `?` means that the property is optional
export interface UserProps {
  id?: number
  name?: string
  age?: number
}

const rootURL = 'http://localhost:3000/users'

export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(rootURL)
  public attributes: Attributes<UserProps>

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs)
  }

  // pass-thru methods


  get on() { return this.events.on } // return a reference to Eventing.on() method

  get trigger() { return this.events.trigger }

  get get() { return this.attributes.get }
}