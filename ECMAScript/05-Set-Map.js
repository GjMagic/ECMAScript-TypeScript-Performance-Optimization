// Set 数据结构
const arr = [1, 2, 1, 4, 5]
const s = new Set(arr)
console.log(s.size)
console.log(s.has(4))
console.log(s.delete(2))
console.log(s.add(3))
// console.log(s.clear())
// console.log(s.entries())
/* for (const i of s) {
  console.log(i)
}
console.log(s)
console.log(Array.from(s))
console.log([...s]) */

// Map 数据结构，可以以任意类型的值作为键
const tom = { name: 'tom' }
const m = new Map()
m.set(tom, 90)
console.log(m)
console.log(m.get(tom))