import { User } from './models/User'

const user = new User({ name: 'Alex', age: 23 })

user.on('change', () => {
  console.log('hi there')
})

console.log(user)