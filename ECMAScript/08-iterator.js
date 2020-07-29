// 迭代器 Iterator
const set = new Set(['foo', 'bar', 'zoo'])

const iterator = set[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())