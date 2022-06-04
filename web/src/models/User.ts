interface UserProps {
  name?: string  // setting this as optional
  age?: number   // setting this as optional
}

type Callback = () => void; // create a type for function that takes no args and returns nothing

export class User {

  // NOTE: create an 'event' property, which is an object that contains
  // an array of (string) event keys : (callback) values.
  // We use this syntax when we know we'll have an object, just not what it will be
  events: { [key: string]: Callback[] } = {}

  constructor(private data: UserProps) {

  }

  get(propName: string): (number | string) {
    return this.data[propName]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName]

    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach(callback => {
      callback()
    })
  }
}