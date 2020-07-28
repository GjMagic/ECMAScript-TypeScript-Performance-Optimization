const person = {
  name: 'gongjian',
  age: 26
}

personProxy = new Proxy(person, {
  get (target, property) {
    return property in target ? target[property] : undefined
  },
  set (target, property, value) {
    if (!Number.isInteger(value)) {
      throw TypeError(`${value} is not int`)
    }
    target[property] = value
  }
})

personProxy.age = 18
console.log(personProxy.age)


const list = []
const listProxy = new Proxy(list, {
  get (target, property) {
    return property in target ? target[property] : ''
  },

  set (target, property, value) {
    console.log(target, property, value)
    target[property] = value
    return true
  }
})

listProxy.push(200)