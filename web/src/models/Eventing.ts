type Callback = () => void; // create a type for function that takes no args and returns nothing

export class Eventing {

  // NOTE: create an 'event' property, which is an object that contains
  // an array of (string) event keys : (callback) values.
  // We use this syntax when we know we'll have an object, just not what it will be
  events: { [key: string]: Callback[] } = {}

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
}