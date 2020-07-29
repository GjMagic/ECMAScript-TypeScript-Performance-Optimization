const s = Symbol()
// console.log(typeof s)
console.log(Symbol('obj') === Symbol('obj'))
const obj = {
  [Symbol()]: '27'
}
console.log(obj)
const name = Symbol('name')
const person = {
  [name]: 'gongjian', // 私有属性
  say () {
    console.log(this[name])
  }
}
console.log(person[Symbol('name')])
person.say()

const s1 = Symbol.for('foo')
const s2 = Symbol.for('foo')
console.log(s1 === s2)
console.log(Symbol.for(true) === Symbol.for('true')) // 只能用字符串做标识符
const obj1 = {
  [Symbol.toStringTag]: 'XObject'
}
console.log(obj1.toString())

const obj2 = {
  [Symbol()]: 'symbol value',
  foo: 'foo value'
}

for (const key in obj2) {
  console.log(key)
}

console.log(Object.keys(obj2))
console.log(JSON.stringify(obj2))
console.log(Object.getOwnPropertySymbols(obj2))
