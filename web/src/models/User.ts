import axios, { AxiosResponse } from 'axios'


// using `?` means that the property is optional
interface UserProps {
  id?: number
  name?: string
  age?: number
}

type Callback = () => void; // create a type for function that takes no args and returns nothing

export class User {

  // NOTE: create an 'event' property, which is an object that contains
  // an array of (string) event keys : (callback) values.
  // We use this syntax when we know we'll have an object, just not what it will be
  events: { [key: string]: Callback[] } = {}

  constructor(private data: UserProps) {

  }

  // get UserProps
  get(propName: string): (number | string) {
    return this.data[propName]
  }

  // set UserProps (any props passed in)
  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  // on any type of event, add to handlers
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  // trigger an event
  trigger(eventName: string): void {
    const handlers = this.events[eventName]

    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach(callback => {
      callback()
    })
  }

  // fetch a user
  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data)
      })
  }

  // persist a user's data
  save(): void {
    const id = this.get('id')

    if (id) {
      // PUT
      axios.put(`http://localhost:3000/users/${id}`, this.data)
    } else {
      // POST
      axios.post(`http://localhost:3000/users`, this.data)
    }
  }
}